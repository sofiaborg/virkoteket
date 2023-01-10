import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IPost } from "../../../interfaces/IProps";
import { IReview } from "../../../interfaces/IProps";
import { getCurrentUser } from "../../../interfaces/IProps";
import { ReviewNumbers } from "../../../interfaces/IProps";

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
  const [rating, setRating] = useState<number>(0);
  const [ratingHover, setRatingHover] = useState(0);
  const [comment, setComment] = useState<String>("");
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
          user: user.email,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setComment("");
    setRating(0);

    setAddReview(true);
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-3/4 py-20 flex gap-6 ">
          <div className=" w-3/12 bg-[#F6F0F0] h-4/5 pb-7 px-5 overflow-y-scroll ">
            {post.reviews.length > 0 ? (
              <div>
                {post.reviews
                  .slice()
                  .reverse()
                  .map((review: IReview) => (
                    <div className="pt-7" key={review._id}>
                      <h3 className="text-xs italic">{review.comment}</h3>
                      <div>
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          return (
                            <span
                              key={index}
                              className={`text-xl ${
                                index <= review.rating
                                  ? "text-[#e9bcbc]"
                                  : "text-gray-200"
                              }`}
                            >
                              &#10084;
                            </span>
                          );
                        })}
                      </div>
                      <h5 className="text-xs">{review.user}</h5>
                    </div>
                  ))}
              </div>
            ) : (
              <ul>
                <li>No reviews yet.</li>
              </ul>
            )}
          </div>

          <div className=" w-9/12 ">
            <div>
              <h1 className="text-xl ">{post.title}</h1>
              <p className="text-xs">Mönster av {post.user}</p>
              <p className="pt-7 text-sm">{post.description}</p>

              <div className="flex flex-col md:flex-row justify-between w-full">
                <ul className="pt-7 text-sm w-3/6">
                  <li>Type of project: {post.type}</li>
                  <li>Level: {post.difficulty}</li>
                  <li>Category: {post.category}</li>
                  <li>Yarn used in pattern: {post.yarn}</li>
                  <li>
                    Needle/hook size: {post.needle} {post.hook}
                  </li>
                </ul>

                <div className="pt-7 flex justify-center items-center w-3/6">
                  <div className="bg-red-500 rounded-full h-28 w-28 flex justify-center items-center">
                    <a href={post.pattern} attributes-list>
                      Get pattern
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex pt-7 gap-4 justify-center">
                <img
                  className="h-full w-48 object-cover"
                  src={post.image}
                  alt="alttext"
                />
              </div>
            </div>

            <div className="pt-7 flex flex-col items-center justify-center">
              <h1>
                Have you used this pattern? Please tell us what you think!
              </h1>
              <form
                className="w-full flex flex-col justify-center items-center "
                onSubmit={handleSubmit}
              >
                <textarea
                  id="message"
                  className="block p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your review here..."
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>

                <div className="star-rating pt-5">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={`${
                          index <= (ratingHover || rating)
                            ? "text-[#e9bcbc]"
                            : "text-gray-200"
                        } bg-transparent text-xl`}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setRatingHover(index)}
                        onMouseLeave={() => setRatingHover(rating)}
                      >
                        <span className="star">&#10084;</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-5">
                  <button className="bg-[#ed9999] hover:bg-[#da9090] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <a href="/patterns">Back</a>
      </div>
    </>
  );
};
