import { useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { IPost } from "../../interfaces/IProps";
import { Link } from "react-router-dom";
import { postsProps } from "../../interfaces/IProps";

export const AllPatterns = (props: postsProps) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `http://localhost:8000/posts/getposts?category=${props.category}&filter=${props.filter}`
      );
      const data = await response.json();
      setPosts(data);

      // Now you can use the `products` array in your component
      // ...
    }
    fetchProducts();
  }, [props.category, props.filter]); // This will cause the effect to run again if either `category` or `filter` changes

  // ...

  // useEffect(() => {
  //   fetch("http://localhost:8000/posts/getposts", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       mode: "no-cors",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, []);

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
        {posts.map((post: IPost) => (
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
