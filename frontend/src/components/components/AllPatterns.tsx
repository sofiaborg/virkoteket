import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { IPost } from "../../interfaces/IPost";
import { Link } from "react-router-dom";

export const AllPatterns = () => {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);

  const { isLoggedIn, login, logout } = useContext(AuthContext);

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
        setAllPosts(data);
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
        {allPosts.map((post) => (
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
