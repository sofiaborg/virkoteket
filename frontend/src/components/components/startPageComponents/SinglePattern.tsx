import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { IPost } from "../../../interfaces/IProps";
import { IReview } from "../../../interfaces/IProps";
import { getCurrentUser } from "../../../interfaces/IProps";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth-context";

export const SinglePattern = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

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
  const [comment, setComment] = useState<string>("");
  const [addReview, setAddReview] = useState<Boolean>(false);
  const { id } = useParams();
  const [image, setImage] = useState<string>("");

  const [commentError, setCommentError] = useState<string>("");
  const [ratingError, setRatingError] = useState<string>("");

  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/");
    }
  }, [auth.isLoggedIn]);

  function validateForm() {
    let error = false;

    if (comment.trim() === "" || null) {
      setCommentError("Comment is required");
      error = true;
    } else {
      setCommentError("");
    }
    if (rating === 0 || null) {
      setRatingError("Rating needs to be at least 1...");
      error = true;
    } else {
      setRatingError("");
    }

    if (!error) {
      return true;
    } else {
      return false;
    }
  }

  //fetch pattern

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(
        `http://localhost:8000/posts/${id}/getsinglepost`
      );

      if (response.status === 200) {
        const data = await response.json();
        setPost(data);
      } else {
        navigate("/*");
      }
    }
    fetchProduct();
  }, [addReview]);

  //convert img
  const convertImgFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: String = fileRef.type || "";
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };

  //submit comment + rating
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const user = getCurrentUser();

    event.preventDefault();
    if (validateForm()) {
      try {
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
              user: user.username,
              image: image,
            }),
          }
        ).then((response) => {
          if (response.status === 200) {
            setComment("");
            setRating(0);
            setRatingHover(0);
            setImage("");

            setAddReview(true);
          } else if (response.status === 500) {
          }
        });
      } catch {}
    } else {
    }
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-4/5 md:w-3/4 py-20 flex flex-col flex-col-reverse gap-1 sm:flex-row sm:flex-row">
          <div className="w-full sm:w-3/5 bg-[#F6F0F0] h-4/5 pb-2 px-5 overflow-y-scroll ">
            {post.reviews.length > 0 ? (
              <div>
                {post.reviews
                  .slice()
                  .reverse()
                  .map((review: IReview) => (
                    <div className="flex sm:flex-col pt-7" key={review._id}>
                      <div className="flex">
                        <div className="w-full">
                          {" "}
                          <img
                            className="h-50 w-full object-cover pr-2"
                            src={review.image}
                            alt="Review"
                          />{" "}
                        </div>
                      </div>

                      <div className="flex-col">
                        <h3 className="text-xs italic pt-3">
                          {review.comment}
                        </h3>

                        <div className="pt-3">
                          {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                              <span
                                key={index}
                                className={`text-xs md:text-xl ${
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
                        <p className="text-xs pb-2">{review.user} </p>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <ul>
                <li className="py-6 italic">
                  This pattern has no reviews yet.
                </li>
              </ul>
            )}
          </div>

          <div className="flex flex-col px-8">
            <div>
              <div className="title-description">
                <h1 className="text-xl font-sans font-family: sans-open">
                  {post.title}
                </h1>
                <p className="pt-7 text-sm font-sans font-family: sans-open">
                  {post.description}
                </p>
              </div>

              <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="image flex pt-7 gap-4 justify-center">
                  <img
                    className="h-full w-48 object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="information">
                    <ul className="pt-7 text-sm">
                      <li className="font-sans font-family: sans-open text-xs pb-2">
                        Type of project: {post.type}
                      </li>
                      <li className="font-sans font-family: sans-open text-xs pb-2">
                        Level: {post.difficulty}
                      </li>
                      <li className="font-sans font-family: sans-open text-xs pb-2">
                        Category: {post.category}
                      </li>
                      <li className="font-sans font-family: sans-open text-xs pb-2">
                        Yarn used in pattern: {post.yarn}
                      </li>
                      <li className="font-sans font-family: sans-open text-xs pb-10">
                        Needle/hook size: {post.needle} {post.hook}
                      </li>
                    </ul>
                  </div>

                  <div className="button flex justify-center items-center">
                    <a
                      href={post.pattern}
                      className="bg-[#ffa3a3] hover:bg-[#ff9290] flex justify-evenly text-white text-sm w-44 py-2 px-2 rounded focus:outline-none focus:shadow-outline font-sans font-family: sans-open"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      Free Download
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-7 flex flex-col items-center justify-center pt-20">
              <p className="font-sans font-family: sans-open text-sm pb-8">
                Have you used this pattern? Please tell us what you think!
              </p>
              <form
                className="w-full flex flex-col justify-center items-center "
                onSubmit={handleSubmit}
              >
                <textarea
                  id="message"
                  className="block p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your review here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <p>{commentError}</p>

                <div className="flex justify-center pt-6">
                  <label
                    htmlFor="imgFile"
                    className="flex justify-center text-white items-center cursor-pointer hover:bg-[#ff9290] rounded-full p-1 w-20 text-xs text-gray-900 font-sans font-family: sans-open bg-[#ffa3a3]"
                  >
                    Add image
                  </label>
                  <input
                    className="hidden"
                    aria-describedby="file_input_help"
                    id="imgFile"
                    type="file"
                    onChange={(e) => convertImgFile(e.target.files)}
                  />
                </div>

                <div className="star-rating pt-5">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        value={ratingHover}
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
                  <p>{ratingError}</p>
                </div>

                <div className="pt-5 pb-10">
                  <button className="bg-[#ffa3a3] hover:bg-[#ff9290] text-white text-sm w-40 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-sans font-family: sans-open">
                    Send review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
