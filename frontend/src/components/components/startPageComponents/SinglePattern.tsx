import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IPost } from "../../../interfaces/IProps";

export const SinglePattern = () => {
  const [post, setPost] = useState<IPost>(Object);
  const { id } = useParams();

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
      <h3>Mönster av {post.user}</h3>
      <h3>{post.title}</h3>
      <img src={post.image} alt={post.image} />
      <div>{post.description}</div>
      <div>{post.type}</div>
      <div>{post.difficulty}</div>
      {/* <div>{post.category}</div>  MÅSTE LOOPAS */}
      <div>{post.hook}</div>
      <div>{post.needle}</div>
      <div>{post.yarn}</div>
      <a href={post.pattern} attributes-list={toString()}>
        {" "}
        Hämta mönster som pdf
      </a>
    </>
  );
};
