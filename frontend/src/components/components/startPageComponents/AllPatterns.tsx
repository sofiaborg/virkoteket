import { useState, useEffect } from "react";
import { IPost, IReview } from "../../../interfaces/IProps";
import { Link } from "react-router-dom";
import { postsProps } from "../../../interfaces/IProps";
import { getCurrentUser } from "../../../interfaces/IProps";

export const AllPatterns = (props: postsProps) => {
  const [posts, setPosts] = useState([]);
  const [rating, setRating] = useState<number>(0);
  const [ratingOne, setRatingOne] = useState<Boolean>(false);
  const [ratingTwo, setRatingTwo] = useState<Boolean>(false);
  const [ratingThree, setRatingThree] = useState<Boolean>(false);
  const [ratingFour, setRatingFour] = useState<Boolean>(false);
  const [ratingFive, setRatingFive] = useState<Boolean>(false);

  useEffect(() => {
    // const headers: Record<string, string> = {
    //   Authorization: sessionStorage.getItem(user.token) as string,
    // };
    async function fetchProducts() {
      const response = await fetch(
        `http://localhost:8000/posts/getposts/?category=${
          props.category
        }&filter=${encodeURIComponent(JSON.stringify(props.filters))}`
        // {
        //   headers,
        // }
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchProducts();
  }, [props.category, props.filters]);

  //set rating in correct state
  useEffect(() => {
    if (rating === 0) {
      setRatingOne(false);
      setRatingTwo(false);
      setRatingThree(false);
      setRatingFour(false);
      setRatingFive(false);
    }
    if (rating === 1) {
      setRatingOne(true);
    }
    if (rating === 2) {
      setRatingTwo(true);
    }
    if (rating === 3) {
      setRatingThree(true);
    }
    if (rating === 4) {
      setRatingFour(true);
    }
    if (rating === 5) {
      setRatingFive(true);
    }
  }, [rating]);

  return (
    <>
      <div className="container mx-auto">
        {/* <!-- Column --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: IPost) => (
            <div className="bg-white " key={post._id}>
              <Link className="link" to={"/patterns/" + post._id}>
                <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                  <img
                    className="h-60 w-full object-cover hover:scale-110 transition duration-700 ease-in-out"
                    src={post.image}
                    alt="bild"
                  />
                </div>
              </Link>

              <h3 className="font-sans font-family: sans-open text-xs pt-1">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
