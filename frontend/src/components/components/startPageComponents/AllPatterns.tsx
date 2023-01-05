import { useState, useEffect } from "react";
import { IPost } from "../../../interfaces/IProps";
import { Link } from "react-router-dom";
import { postsProps } from "../../../interfaces/IProps";
import { getCurrentUser } from "../../../interfaces/IProps";

export const AllPatterns = (props: postsProps) => {
  const [posts, setPosts] = useState([]);
  const user = getCurrentUser();

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

  return (
    <>
      <div>
        {posts.map((post: IPost) => (
          <div key={post._id}>
            <Link className="link" to={"/patterns/" + post._id}>
              <img src={post.image} alt={post.image} />
              <h3>{post.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
