import { showPage } from "../../../interfaces/IProps";
import { IPost } from "../../../interfaces/IProps";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../../interfaces/IProps";

export const MyPatterns = (props: showPage) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const user = getCurrentUser();
    async function fetchPosts() {
      const response = await fetch(`http://localhost:8000/user/myposts`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mode: "no-cors",
          user: user.id,
        },
      });
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [posts]);

  return (
    <>
      {props.show ? (
        <div>
          <h3>Mina mönster</h3>

          {posts.map((post: IPost) => (
            <div key={post._id}>
              <Link className="link" to={"/mypages/" + post._id}>
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
