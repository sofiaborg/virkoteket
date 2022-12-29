import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IPost } from "../../../interfaces/IProps";

export const SinglePattern = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  console.log(post);

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

  return <></>;
};
