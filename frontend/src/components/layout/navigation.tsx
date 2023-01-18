import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className=" flex justify-center w-full border-b-4 border-black-100 h-32">
      <div className="flex h-full w-10/12 justify-between">
        <div className=" flex justify-center items-center">
          <div className="image-logo cursor-pointer pb-4">
            <Link to="/patterns">
              <img
                className="h-16"
                src="https://firebasestorage.googleapis.com/v0/b/virkoteket.appspot.com/o/files%2FTCC.png?alt=media&token=d5ed5582-77df-445b-93b8-94ed1d68db75"
                alt="The crochet club"
              />
            </Link>
          </div>
        </div>

        <div
          className=" flex justify-center items-center gap-4"
          id="faq-button"
        >
          <Link to="/faq">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EE7FA0"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#ffffff"
              className="w-6 h-6 hover:fill-[#EE7FA0]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </Link>

          <Link to={"/mypages/createpattern"} className="mypages-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EE7FA0"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#EE7FA0"
              className="w-6 h-6 hover:fill-[#EE7FA0]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
