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
    // const headers: Record<string, string> = {
    //   Authorization: sessionStorage.getItem(user.token) as string,
    // };
    async function fetchProducts() {
      const response = await fetch(
        `http://localhost:8000/posts/getposts/?category=${
          props.category
        }&filter=${encodeURIComponent(JSON.stringify(props.filters))}`
        // {
        //   headers,
        // }
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchProducts();
  }, [props.category, props.filters]);

  useEffect(() => {
    console.log("inne i useeffect", posts);
  }, [posts, props.category, props.filters]);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((post: IPost) => (
              <div className="bg-white " key={post._id}>
                <Link className="link" to={"/patterns/" + post._id}>
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
        ) : (
          <div className="text-center">
            There's no patterns with theese filters...
          </div>
        )}
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
          // subContainerClassName={"pages pagination"}
          activeClassName={
            "bg-[#e9bcbc] rounded-full w-8 h-8 flex justify-center items-center"
          }
        />
      </div>
    </>
  );
};
