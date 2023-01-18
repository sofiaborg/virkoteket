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
    }
  };

  if (posts.length > 0) {
    return (
      <div className="container mx-auto bg-[#f2eded] px-8 py-6">
        <h1 className="font-sans font-family: sans-open pb-4">My patterns </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
          {posts.map((post: IPost) => (
            <div key={post._id}>
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  className="h-full md:h-56 w-full object-cover"
                  src={post.image}
                  alt={post.image}
                />
              </div>

              <div className="flex justify-evenly md:justify-between pt-2">
                <p className="text-xs text-gray-900 font-sans font-family: sans-open">
                  {post.title}
                </p>

                <button
                  className="flex justify-center items-center text-white hover:bg-[#ff9290] cursor-pointer rounded-full p-1 w-16 text-xs text-gray-900 font-sans font-family: sans-open bg-[#ffa3a3]"
                  onClick={() => deletePost(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h2 className="font-sans font-family: sans-open pb-4 px-12 py-8">
            My patterns
          </h2>

          <h4 className="text-xs text-gray-900 font-sans font-family: sans-open px-12">
            You don't have any patterns yet. Create one by clicking "Create
            pattern" in the menu!
          </h4>
        </div>

        <div></div>
      </div>
    );
  }
};
