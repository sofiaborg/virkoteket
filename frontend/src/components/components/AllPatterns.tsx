import { useState, useEffect } from "react";
import { useContext } from "react";
import { Categories } from "./Categories";
import { Filters } from "./Filters";
import {
  postsContext,
  IPostsContext,
  defaultValue,
} from "../../contexts/products-context";
import { AuthContext } from "../../contexts/auth-context";
import { IPost } from "../../interfaces/IProps";
import { Link } from "react-router-dom";

export const AllPatterns = () => {
  const [posts, setPosts] = useState<IPostsContext>(defaultValue);
  const [category, setCategory] = useState<IPostsContext>(defaultValue);
  const [filters, setFilters] = useState<IPostsContext>(defaultValue);

  useEffect(() => {
    fetch("http://localhost:8000/posts/getposts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts({ ...posts, posts: data });
      });
  }, []);

  // //get posts and set in state when entering admin-page
  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   fetch("http://localhost:8000/posts/getposts", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //       mode: "no-cors",
  //     },
  //   })
  //     .then((response) => console.log(response))
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <>
      <div>
        {posts.posts.map((post: IPost) => (
          <div key={post.id}>
            <Link className="link" to={"/posts/" + post.id}>
              <img src={post.image} alt={post.image} />
              <h3>{post.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
