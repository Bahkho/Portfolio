import React from "react";
import collegePortfolio from "../assets/collegePortfolio.png";
import dataFinance from "../assets/dataFinance.png";
import routing from "../assets/routing.png";
import tenzies from "../assets/tenzies.png";
import memeGenerator from "../assets/memeGenerator.png";
import codingFacts from "../assets/codingFacts.png";

const Project = (props) => {
  const projects = [
    {
      id: 1,
      src: tenzies,
      style: " w-[700px] h-[300px]",
    },
    {
      id: 4,
      src: memeGenerator,
      style: " w-[700px] h-[300px]",
    },
    {
      id: 3,
      src: routing,
      style: " w-[700px] h-[300px]",
    },
    {
      id: 2,
      src: dataFinance,
      style: " w-[700px] h-[300px]",
    },
    {
      id: 5,
      src: codingFacts,
      style: " w-[700px] h-[300px]",
    },
    {
      id: 6,
      src: collegePortfolio,
      style: " w-[700px] h-[300px]",
    },
  ];

  return (
    <div className={props.mode ? "" : "dark"}>
      <div className="w-full text-black dark:text-white">
        <div className=" max-w-[1240px] mx-auto p-4 flex flex-col justify-center">
          <div className="pb-8">
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              Projects
            </p>
            <p className="py-6">Check out some of my works right here</p>
          </div>

          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 sm:px-0">
            {projects.map(({ id, src, style }) => (
              <div
                key={id}
                className=" shadow-lg shadow-[#e2e8f0] dark:shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt="/"
                  className={
                    "rounded-md duration-200 hover:scale-105" + " " + style
                  }
                />

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
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
