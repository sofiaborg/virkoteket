import { IPost } from "../../../interfaces/IProps";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../../interfaces/IProps";

export const MyPatterns = () => {
  const [posts, setPosts] = useState([]);
  const user = getCurrentUser();

  useEffect(() => {
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

  const deletePost = async (id: number) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:8000/user/${id}/deletepost`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      setPosts(data);
    } else {
      console.log("error");
    }
  };

  if (posts.length > 0) {
    return (
      <>
        <div>
          <h3>Mina mönster</h3>

          {posts.map((post: IPost) => (
            <div key={post._id}>
              <Link className="link" to={"/mypages/" + post._id}>
                <img src={post.image} alt={post.image} />
                <h3>{post.title}</h3>
              </Link>
              <button onClick={() => deletePost(post._id)}>
                Radera mönster
              </button>
            </div>
          ))}
        </div>

        <div></div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h3>Mina mönster</h3>

          <h4>Du har inga mönster</h4>
        </div>

        <div></div>
      </>
    );
  }
};
