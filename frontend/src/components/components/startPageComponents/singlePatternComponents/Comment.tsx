import { getCurrentUser } from "../../../../interfaces/IProps";
import { useState } from "react";
import { useParams } from "react-router";

export const Comment = () => {
  const [rating, setRating] = useState<Number>(0);
  const [comment, setComment] = useState<String>("");
  const [image, setImage] = useState<String>("");
  const [review, setReview] = useState<Boolean>(false);
  const { id } = useParams();

  //set rating state
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  //submit comment + rating
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = getCurrentUser();

    event.preventDefault();
    await fetch(
      `http://localhost:8000/posts/${id}/createreview`,

      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mode: "no-cors",
        },

        body: JSON.stringify({
          rating,
          comment,
          image,
          user: user.email,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setReview(true);
  };
  return (
    <>
      <div className="comment-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="textarea"
            placeholder="Vad tyckte du om mönstret?"
            onChange={(e) => setComment(e.target.value)}
          />

          <input
            type="file"
            placeholder="Lägg till bild"
            onChange={(e) => setImage(e.target.value)}
          />

          {/* behöver lägga till for="...." i varje rate  https://codepen.io/hesguru/pen/BaybqXv */}
          <div className="rate">
            <input
              type="radio"
              id="rate5"
              name="rate"
              value="5"
              onChange={handleRatingChange}
            />
            <label title="text">5</label>
            <input
              type="radio"
              id="rate4"
              name="rate"
              value="4"
              onChange={handleRatingChange}
            />
            <label title="text">4</label>
            <input
              type="radio"
              id="rate3"
              name="rate"
              value="3"
              onChange={handleRatingChange}
            />
            <label title="text">3</label>
            <input
              type="radio"
              id="rate2"
              name="rate"
              value="2"
              onChange={handleRatingChange}
            />
            <label title="text">2</label>
            <input
              type="radio"
              id="rate1"
              name="rate"
              value="1"
              onChange={handleRatingChange}
            />
            <label title="text">1</label>
          </div>
          <button>Skicka</button>
        </form>
      </div>
    </>
  );
};
