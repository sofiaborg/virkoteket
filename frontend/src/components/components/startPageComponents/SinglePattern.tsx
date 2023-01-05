import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IPost } from "../../../interfaces/IProps";
import { IReview } from "../../../interfaces/IProps";
import { getCurrentUser } from "../../../interfaces/IProps";

export const SinglePattern = () => {
  const [post, setPost] = useState<IPost>({
    _id: 0,
    title: "",
    image: "",
    pattern: "",
    description: "",
    type: 0,
    difficulty: 0,
    yarn: 0,
    hook: 0,
    needle: 0,
    category: "",
    user: "",
    reviews: [],
  });
  const [rating, setRating] = useState<Number>(0);
  const [comment, setComment] = useState<String>("");
  const [image, setImage] = useState<String>("");
  const [addReview, setAddReview] = useState<Boolean>(false);
  const { id } = useParams();

  //fetch pattern
  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(
        `http://localhost:8000/posts/${id}/getsinglepost`
      );
      const data = await response.json();
      setPost(data);
    }
    fetchProduct();
  }, [addReview]);

  //set rating state
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  //submit comment + rating
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

    setComment("");
    setImage("");
    setRating(0);

    setAddReview(true);
  };

  return (
    <>
      <div className="reviews-wrapper">
        <h3>Recensioner</h3>
        <div>
          {post.reviews.map((review: IReview) => (
            <div key={review._id}>
              <img src={review.image} alt={review.image} />
              <h3>{review.comment}</h3>
              <div>{review.rating}</div>
              <h5>{review.user}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="pattern-wrapper">
        <h3>Mönster av {post.user}</h3>
        <h3>{post.title}</h3>
        <img src={post.image} alt={post.image} />
        <div>{post.description}</div>
        <div>{post.type}</div>
        <div>{post.difficulty}</div>
        <div>{post.category}</div>
        <div>{post.hook}</div>
        <div>{post.needle}</div>
        <div>{post.yarn}</div>
        <a href={post.pattern} attributes-list>
          Hämta mönster som pdf
        </a>
      </div>

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
