import { useEffect, useState } from "react";
import { IReview } from "../../../../interfaces/IProps";
import { useParams } from "react-router";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  //fetch reviews of single pattern
  useEffect(() => {
    // const headers: Record<string, string> = {
    //   Authorization: sessionStorage.getItem(user.token) as string,
    // };
    async function fetchProducts() {
      const response = await fetch(
        `http://localhost:8000/posts/${id}/getsinglepost`
        // {
        //   headers,
        // }
      );
      const data = await response.json();
      setReviews(data.reviews);
      console.log(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="reviews-wrapper">
        <h3>Recensioner</h3>
        <div>
          {reviews.map((review: IReview) => (
            <div key={review._id}>
              <img src={review.image} alt={review.image} />
              <h3>{review.comment}</h3>
              <div>{review.rating}</div>
              <h5>{review.user}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
