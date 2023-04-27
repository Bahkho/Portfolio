import { TypeAnimation } from "react-type-animation";

const Hero = (props) => {
  return (
    <div className={props.mode ? "" : "dark"}>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-black dark:text-white flex flex-col justify-center">
        <p className="text-teal-600 font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <TypeAnimation
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
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
        <button className="bg-teal-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black dark:text-white">
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
