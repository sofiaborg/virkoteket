import { useEffect, useState } from "react";
import { IReview } from "../../../../interfaces/IProps";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  //fetch reviews
  //   useEffect(() => {
  //     // const headers: Record<string, string> = {
  //     //   Authorization: sessionStorage.getItem(user.token) as string,
  //     // };
  //     async function fetchProduct() {
  //       const response = await fetch(
  //         `http://localhost:8000/posts/getsinglepost`
  //         // {
  //         //   headers,
  //         // }
  //       );
  //       const data = await response.json();
  //       setReviews(data);
  //     }
  //     fetchProduct();
  //   }, []);
  return (
    <div>
      <div className="reviews-wrapper">
        <h3>Recensioner</h3>
      </div>
    </div>
  );
};
