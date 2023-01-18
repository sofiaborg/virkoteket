import React, { useState } from "react";

export const FAQ = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className=" w-full flex flex-col md:flex justify-center items-center">
      <div
        onClick={() => setToggleSidebar(!toggleSidebar)}
        className="md:hidden w-full flex justify-center bg-[#F6F0F0]"
      >
        <p className="font-sans font-family: sans-open text-sm px-3 py-3">
          Search by filters
        </p>
        <p className="flex justify-center items-center pr-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
      </div>
      <div className=" w-full md:w-3/4 md:py-20 flex gap-6">
        <div
          className={`transition-all w-full absolute bg-[#ffffffef] md:bg-transparent px-6 md:px-0 py-6 z-10 md:static md:z-0 md:block md:w-3/12 ${
            toggleSidebar ? "block " : "hidden"
          }`}
        >
          <div className=" w-full h-1/4 bg-[#ffffffef] md:bg-[#F6F0F0] px-4 py-2">
            <ul>
              <h2 className="pt-5 font-sans font-family: sans-open  text-lg font-bold">
                {" "}
                FAQ
              </h2>
              <li className="pt-5 hover:font-bold">
                {" "}
                <a
                  className="font-sans font-family: sans-open text-sm "
                  href="#freetouse"
                >
                  Is KnitOnePurlOne free to use?
                </a>{" "}
              </li>{" "}
              <li className="pt-5 hover:font-bold">
                {" "}
                <a
                  className="font-sans font-family: sans-open  text-sm"
                  href="#copyright"
                >
                  Copyright on patterns?
                </a>{" "}
              </li>{" "}
              <li className="pt-5 hover:font-bold">
                {" "}
                <a
                  className="font-sans font-family: sans-open  text-sm"
                  href="#gdpr"
                >
                  GDPR policy
                </a>{" "}
              </li>{" "}
              <li className="pt-5 hover:font-bold">
                {" "}
                <a
                  className="font-sans font-family: sans-open  text-sm"
                  href="#upload"
                >
                  How do I upload a pattern?
                </a>{" "}
              </li>{" "}
            </ul>
            <ul>
              <h2 className="pt-12 font-sans font-family: sans-open text-lg font-bold">
                {" "}
                Community
              </h2>
              <li className="pt-5 hover:font-bold">
                {" "}
                <a
                  className="font-sans font-family: sans-open  text-sm"
                  href="#guidelines"
                >
                  Community guidelines
                </a>{" "}
              </li>{" "}
              <li className="pt-5 hover:font-bold">
                {" "}
                <a
                  className="font-sans font-family: sans-open  text-sm"
                  href="#history"
                >
                  KnitOnePurlOne history
                </a>{" "}
              </li>{" "}
              <li className="pt-5 hover:font-bold">
                {" "}
                <a
                  className="font-sans font-family: sans-open text-sm"
                  href="#donation"
                >
                  Make a donation
                </a>{" "}
              </li>{" "}
              <li className="pt-5 hover:font-bold">
                {" "}
                <a
                  className="font-sans font-family: sans-open text-sm"
                  href="#work"
                >
                  Work with us!
                </a>{" "}
              </li>{" "}
            </ul>
          </div>
        </div>

        <div className=" w-full px-10 md:w-9/12 md:px-4">
          <h2 className="font-sans font-family: sans-open font-bold text-lg py-4">
            Frequently Asked Questions
          </h2>
          <div className="pb-6">
            {" "}
            <h2
              className="font-sans font-family: sans-open px-2"
              id="freetouse"
            >
              Is KnitOnePurlOne free to use?
            </h2>
            <p className="font-sans font-family: sans-open text-sm px-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              nemo minus accusamus quidem pariatur numquam. Eveniet a eos vel
              quidem blanditiis id ducimus ad rem, consequuntur, recusandae
              perspiciatis cumque quas molestias reiciendis cum. In atque
              corrupti reprehenderit amet quas error quos obcaecati velit
              nesciunt? Cupiditate minus quas, numquam obcaecati itaque
              inventore, autem facilis excepturi quia maxime architecto neque
              quasi modi!
            </p>
          </div>
          <div className="pb-6">
            <h2
              className="font-sans font-family: sans-open px-2"
              id="copyright"
            >
              Copyright on patterns?
            </h2>{" "}
            <p className="font-sans font-family: sans-open text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiandae aut veritatis officiis quae quos nulla labore
              repellendus modi excepturi nihil? Quasi non sit et quia deleniti
              eos, sunt tempore at quaerat eaque quam quas ipsam quo aspernatur
              cumquevoluptates enim exercitationem cumque fuga molestias
              inventore aliquam provident placeat? Odit eveniet nobis culpa
              tenetur mollitia, tempora, consectetur, non necessitatibus optio
              iure impedit deserunt? Error?
            </p>
            <p className="font-sans font-family: sans-open text-sm px-2 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiaercitationem cumque fuga molestias inventore aliquam
              provident placeat? Odit eveniet nobis culpa tenetur mollitia,
              tempora, consectetur, non necessitatibus optio iure impedit
              deserunt? Error?
            </p>
          </div>
          <div className="pb-6">
            <h2 className="font-sans font-family: sans-open px-2" id="gdpr">
              GDPR policy
            </h2>{" "}
            <p className="font-sans font-family: sans-open text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiandae aut veritatis officiis quae quos nulla labore
              repellendus modi excepturi nihil? Quasi non sit et quia deleniti
              eos, sunt tempore at quaerat eaque quam quas ipsam quo aspernatur
              cumquevoluptates enim exercitationem cumque fuga molestias
              inventore aliquam provident placeat? Odit eveniet nobis culpa
              tenetur mollitia, tempora, consectetur, non necessitatibus optio
              iure impedit deserunt? Error?
            </p>
            <p className="font-sans font-family: sans-open text-sm px-2 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiaercitationem cumque fuga molestias inventore aliquam
              provident placeat? Odit eveniet nobis culpa tenetur mollitia,
              tempora, consectetur, non necessitatibus optio iure impedit
              deserunt? Error?
            </p>
          </div>{" "}
          <div className="pb-6">
            <h2 className="font-sans font-family: sans-open px-2" id="upload">
              How do I upload a pattern?
            </h2>{" "}
            <p className="font-sans font-family: sans-open text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiandae aut veritatis officiis quae quos nulla labore
              repellendus modi excepturi nihil? Quasi non sit et quia deleniti
              eos, sunt tempore at quaerat eaque quam quas ipsam quo aspernatur
              cumquevoluptates enim exercitationem cumque fuga molestias
              inventore aliquam provident placeat? Odit eveniet nobis culpa
              tenetur mollitia, tempora, consectetur, non necessitatibus optio
              iure impedit deserunt? Error?
            </p>
            <p className="font-sans font-family: sans-open text-sm px-2 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiaercitationem cumque fuga molestias inventore aliquam
              provident placeat? Odit eveniet nobis culpa tenetur mollitia,
              tempora, consectetur, non necessitatibus optio iure impedit
              deserunt? Error?
            </p>
          </div>{" "}
          <h2 className="font-sans font-family: sans-open font-bold text-lg py-4">
            Community
          </h2>
          <div className="pb-6">
            <h2
              className="font-sans font-family: sans-open px-2"
              id="guidelines"
            >
              Community guidelines
            </h2>{" "}
            <p className="font-sans font-family: sans-open text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiandae aut veritatis officiis quae quos nulla labore
              repellendus modi excepturi nihil? Quasi non sit et quia deleniti
              eos, sunt tempore at quaerat eaque quam quas ipsam quo aspernatur
              cumquevoluptates enim exercitationem cumque fuga molestias
              inventore aliquam provident placeat? Odit eveniet nobis culpa
              tenetur mollitia, tempora, consectetur, non necessitatibus optio
              iure impedit deserunt? Error?
            </p>
            <p className="font-sans font-family: sans-open text-sm px-2 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiaercitationem cumque fuga molestias inventore aliquam
              provident placeat? Odit eveniet nobis culpa tenetur mollitia,
              tempora, consectetur, non necessitatibus optio iure impedit
              deserunt? Error?
            </p>
          </div>{" "}
          <div className="pb-6">
            <h2 className="font-sans font-family: sans-open px-2" id="history">
              KnitOnePurlOne history
            </h2>{" "}
            <p className="font-sans font-family: sans-open text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiandae aut veritatis officiis quae quos nulla labore
              repellendus modi excepturi nihil? Quasi non sit et quia deleniti
              eos, sunt tempore at quaerat eaque quam quas ipsam quo aspernatur
              cumquevoluptates enim exercitationem cumque fuga molestias
              inventore aliquam provident placeat? Odit eveniet nobis culpa
              tenetur mollitia, tempora, consectetur, non necessitatibus optio
              iure impedit deserunt? Error?
            </p>
            <p className="font-sans font-family: sans-open text-sm px-2 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiaercitationem cumque fuga molestias inventore aliquam
              provident placeat? Odit eveniet nobis culpa tenetur mollitia,
              tempora, consectetur, non necessitatibus optio iure impedit
              deserunt? Error?
            </p>
          </div>{" "}
          <div className="pb-6">
            <h2 className="font-sans font-family: sans-open px-2" id="donation">
              Make a donation
            </h2>{" "}
            <p className="font-sans font-family: sans-open text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiandae aut veritatis officiis quae quos nulla labore
              repellendus modi excepturi nihil? Quasi non sit et quia deleniti
              eos, sunt tempore at quaerat eaque quam quas ipsam quo aspernatur
              cumquevoluptates enim exercitationem cumque fuga molestias
              inventore aliquam provident placeat? Odit eveniet nobis culpa
              tenetur mollitia, tempora, consectetur, non necessitatibus optio
              iure impedit deserunt? Error?
            </p>
            <p className="font-sans font-family: sans-open text-sm px-2 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiaercitationem cumque fuga molestias inventore aliquam
              provident placeat? Odit eveniet nobis culpa tenetur mollitia,
              tempora, consectetur, non necessitatibus optio iure impedit
              deserunt? Error?
            </p>
          </div>{" "}
          <div className="pb-6">
            <h2 className="font-sans font-family: sans-open px-2" id="work">
              Work with us!
            </h2>{" "}
            <p className="font-sans font-family: sans-open text-sm px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiandae aut veritatis officiis quae quos nulla labore
              repellendus modi excepturi nihil? Quasi non sit et quia deleniti
              eos, sunt tempore at quaerat eaque quam quas ipsam quo aspernatur
              cumquevoluptates enim exercitationem cumque fuga molestias
              inventore aliquam provident placeat? Odit eveniet nobis culpa
              tenetur mollitia, tempora, consectetur, non necessitatibus optio
              iure impedit deserunt? Error?
            </p>
            <p className="font-sans font-family: sans-open text-sm px-2 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              inventore rerum molestias id optio perferendis voluptate, sit
              atque repudiaercitationem cumque fuga molestias inventore aliquam
              provident placeat? Odit eveniet nobis culpa tenetur mollitia,
              tempora, consectetur, non necessitatibus optio iure impedit
              deserunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
