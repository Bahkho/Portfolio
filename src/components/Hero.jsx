import { TypeAnimation } from "react-type-animation";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


const Hero = (props) => {
  return (
    <div className={props.mode ? "" : "dark"}>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-black dark:text-white flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Bakare Abdul
        </h1>
        <p className=" bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text font-bold p-2">
          Frontend Developer
        </p>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <TypeAnimation
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#1e293b]"
            sequence={["BTB", 1000, "BTC", 1000, "SASS", 1000]}
            speed={5}
            deletionSpeed={5}
            repeat={Infinity}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className=" drop-shadow-lg bg-gradient-to-r from-teal-600 to-cyan-600 w-[200px] rounded-md font-medium my-6 mx-auto cursor-pointer py-3 text-black dark:text-white">
          View Resume
          <span>
            <MdOutlineKeyboardArrowRight className="inline-block ml-1" size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
