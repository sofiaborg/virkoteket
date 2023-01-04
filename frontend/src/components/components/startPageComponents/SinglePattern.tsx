import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IPost } from "../../../interfaces/IProps";
import { IReview } from "../../../interfaces/IProps";
import { Comment } from "./singlePatternComponents/Comment";

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
  const { id } = useParams();

  //fetch pattern
  useEffect(() => {
    // const headers: Record<string, string> = {
    //   Authorization: sessionStorage.getItem(user.token) as string,
    // };
    async function fetchProduct() {
      const response = await fetch(
        `http://localhost:8000/posts/${id}/getsinglepost`
        // {
        //   headers,
        // }
      );
      const data = await response.json();
      setPost(data);
    }
    fetchProduct();
  }, []);

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
        {<div>{post.category}</div>}
        <div>{post.hook}</div>
        <div>{post.needle}</div>
        <div>{post.yarn}</div>
        <a href={post.pattern} attributes-list>
          Hämta mönster som pdf
        </a>
      </div>
      <Comment></Comment>
    </>
  );
};
