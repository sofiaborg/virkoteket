import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#edeaea]">
      <div className="w-3/4 flex flex-col sm:flex-row justify-between ">
        <div>
          <h1 className="uppercase font-sans font-family: sans-open pt-16">
            FAQ
          </h1>
          <ul className="text-xs pt-2">
            <li className="cursor-pointer hover:font-medium">
              <a className="font-sans font-family: sans-open" href="/faq">
                Is KnitOnePurlOne free to use?
              </a>
            </li>
            <li className="pt-2 cursor-pointer hover:font-medium">
              <a className="font-sans font-family: sans-open" href="faq">
                Copyright on patterns?
              </a>
            </li>
            <li className="pt-2 cursor-pointer hover:font-medium">
              <a className="font-sans font-family: sans-open" href="/faq">
                GDPR policy
              </a>
            </li>
            <li className="pt-2 cursor-pointer hover:font-medium">
              <a className="font-sans font-family: sans-open" href="/faq">
                How do I upload a pattern?
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase font-sans font-family: sans-open pt-16">
            The community
          </h1>
          <ul className="text-xs font-sans font-family: sans-open pt-2">
            <li className="cursor-pointer hover:font-medium">
              <a className="font-sans font-family: sans-open " href="/faq">
                Community guidelines
              </a>
            </li>
            <li className="pt-2 cursor-pointer hover:font-medium">
              <a className="font-sans font-family: sans-open" href="/faq">
                KnitOnePurlOne history
              </a>
            </li>
            <li className="pt-2 cursor-pointer hover:font-medium">
              <a className="font-sans font-family: sans-open" href="/faq">
                Make a donation
              </a>
            </li>
            <li className="pt-2 cursor-pointer hover:font-medium">
              <a className="font-sans font-family: sans-open" href="/faq">
                Work with us!
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase font-sans font-family: sans-open pt-16">
            Contact us
          </h1>

          <form className=" pt-2">
            <input
              type="email"
              className="font-sans font-family: sans-open block p-1 mb-1 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
            />
            <textarea
              className="font-sans font-family: sans-open block mb-1 p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Message here..."
            ></textarea>
            <div className="w-full flex justify-end">
              <button className=" bg-[#ffa3a3] hover:bg-[#ff9290] font-sans font-family: sans-open text-xs text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" w-9/12 flex justify-between pt-10 pb-10 ">
        <div className="font-sans font-family: sans-open text-xs">
          © KnitOntPurlOne 2023
        </div>

        <div className="flex gap-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-5 h-5"
            >
              <path
                fill="#1877f2"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5"
            >
              <path
                fill="#c13584"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-5 h-5"
            >
              <path
                fill="#e60023"
                d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
