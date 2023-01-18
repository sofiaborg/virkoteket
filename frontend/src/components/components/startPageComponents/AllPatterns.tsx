import { useState, useEffect } from "react";
import { IPost } from "../../../interfaces/IProps";
import { Link } from "react-router-dom";
import { postsProps } from "../../../interfaces/IProps";
import ReactPaginate from "react-paginate";

export const AllPatterns = (props: postsProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(9); // Number of items per page

  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  // Use slice method to get the items for the current page
  const currentItems = posts.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <>
      <div className="container mx-auto">
        {currentItems.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((post: IPost) => (
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
                pageCount={Math.ceil(posts.length / perPage)}
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
