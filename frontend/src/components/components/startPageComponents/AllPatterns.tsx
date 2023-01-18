import { useState, useEffect } from "react";
import { IPost } from "../../../interfaces/IProps";
import { Link } from "react-router-dom";
import { postsProps } from "../../../interfaces/IProps";
import ReactPaginate from "react-paginate";

export const AllPatterns = (props: postsProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(6); // Number of items per page
  const [postsWithAvg, setPostsWithAvg] = useState<IPost[]>([]);

  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);

  //set state-posts with average ratings
  useEffect(() => {
    setPostsWithAvg(
      posts.map((post: IPost) => {
        const ratings = post.reviews?.map((review) => review.rating) ?? [];
        const averageRating =
          ratings.reduce((total, rating) => total + rating, 0) / ratings.length;
        return {
          ...post,
          averageRating,
        };
      })
    );
  }, [posts]);

  // Use slice method to get the items for the current page
  const currentItems = postsWithAvg.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  return (
    <>
      <div className="container mx-auto">
        {currentItems.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {postsWithAvg.map((post: IPost) => (
                <div className="bg-white " key={post._id}>
                  <Link
                    id="single-pattern"
                    className="link"
                    to={"/patterns/" + post._id}
                  >
                    <div className="relative overflow-hidden bg-no-repeat bg-cover sm:max-w-xs">
                      <img
                        className="h full sm:h-60 w-full object-cover hover:scale-110 transition duration-700 ease-in-out"
                        src={post.image}
                        alt="bild"
                      />
                    </div>
                  </Link>

                  <h3 className="font-sans font-family: sans-open text-xs pt-1">
                    {post.title}
                  </h3>
                  <div>
                    <div>
                      {" "}
                      {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                          <span
                            key={index}
                            className={`text-xs md:text-xl ${
                              index <= post.averageRating
                                ? "text-[#e9bcbc]"
                                : "text-gray-200"
                            }`}
                          >
                            &#10084;
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full pt-16">
              <ReactPaginate
                previousLabel={"prev"}
                previousClassName={"hover:font-bold"}
                nextLabel={"next"}
                nextClassName={"hover:font-bold"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(postsWithAvg.length / perPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"flex justify-center gap-12 "}
                activeClassName={
                  "bg-[#e9bcbc] rounded-full w-8 h-8 flex justify-center items-center"
                }
              />
            </div>
          </div>
        ) : (
          <div className="font-sans font-family: sans-open text-left">
            There's no patterns matching theese filters...
          </div>
        )}
      </div>
    </>
  );
};
