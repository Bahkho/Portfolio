import React from "react";
// import collegePortfolio from "../assets/collegePortfolio.png";
import dataFinance from "../assets/dataFinance.png";
import routing from "../assets/routing.png";
import tenzies from "../assets/tenzies.png";
import memeGenerator from "../assets/memeGenerator.png";
import codingFacts from "../assets/codingFacts.png";
import todoApp from "../assets/todo-app.png";

const Project = (props) => {
  const projects = [
    {
      id: 7,
      src: todoApp,
      demo: "https://todo-app-bahkho.vercel.app/",
      code: "https://github.com/Bahkho/Todo-App.git",
    },
    {
      id: 1,
      src: tenzies,
      demo: "https://tenzies-game-01.netlify.app",
      code: "https://github.com/Bahkho/tenziesGame.git",
    },
    // {
    //   id: 2,
    //   src: memeGenerator,
    //   demo: "https://meme-generator-00.netlify.app",
    //   code: "https://github.com/Bahkho/memeGenerator.git",
    // },
    {
      id: 3,
      src: routing,
      demo: "https://web-routing-app.netlify.app",
      code: "https://github.com/Bahkho/React-Router.git",
    },
    {
      id: 4,
      src: dataFinance,
      demo: "https://data-finance-01.netlify.app/",
      code: "https://github.com/Bahkho/React-Tailwind.git",
    },
    {
      id: 5,
      src: codingFacts,
      demo: "https://coding-fun-facts.netlify.app",
      code: "https://github.com/Bahkho/Coding-Facts.git",
    },
    // {
    //   id: 6,
    //   src: collegePortfolio,
    //   demo: "https://abdul-portfolio-site.netlify.app/index.html",
    //   code: "https://github.com/Bahkho/e-portfolio-WEBD1000.git",
    // },
  ];

  return (
    <div name="projects" className={props.mode ? "" : "dark"}>
      <div className="w-full text-black dark:text-white">
        <div className=" max-w-[1240px] mx-auto p-4 flex flex-col justify-center">
          <div className="pb-8">
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              Projects
            </p>
            <p className="py-6">Check out some of my works right here</p>
          </div>

          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 sm:px-0">
            {projects.map(({ id, src, demo, code }) => (
              <div
                key={id}
                className=" shadow-lg shadow-[#e2e8f0] dark:shadow-gray-600 rounded-lg"
              >
                <a href={demo} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt="/"
                    className={`rounded-md duration-200 hover:scale-105 w-[700px] h-[300px]`}
                  />
                </a>

                <div className="flex items-center justify-center">
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> */}
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-500 hover:underline hover:underline-offset-8 hover:text-teal-600 hover:decoration-4">
                      Demo
                    </button>
                  </a>
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> */}
                  <a href={code} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-500 hover:underline hover:underline-offset-8 hover:text-teal-600 hover:decoration-4">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
