import { showPage } from "../../../interfaces/IProps";
import { IPost } from "../../../interfaces/IProps";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MyPatterns = (props: showPage) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:8000/posts/getposts`);
      const data = await response.json();
      setPosts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      {props.show ? (
        <div>
          <h3>Mina mönster</h3>

          {posts.map((post: IPost) => (
            <div key={post.id}>
              <Link className="link" to={"/posts/" + post.id}>
                <img src={post.image} alt={post.image} />
                <h3>{post.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
