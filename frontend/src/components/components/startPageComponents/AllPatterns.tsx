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
      <div className="container mx-auto">
        {/* <!-- Column --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: IPost) => (
            <div className="bg-white " key={post._id}>
              <Link className="link" to={"/patterns/" + post._id}>
                <img
                  className="h-60 w-full object-cover"
                  src={post.image}
                  alt={post.image}
                />
                <h3>{post.title}</h3>
                <h5>{post.type}</h5>
                <h5>{post.category}</h5>
                <h5>{post.difficulty}</h5>
                <h5>{post.hook}</h5>
                <h5>{post.needle}</h5>
                <h5>{post.yarn}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
