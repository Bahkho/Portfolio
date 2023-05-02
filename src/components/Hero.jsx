import { TypeAnimation } from "react-type-animation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = (props) => {
  const resume =
    "https://drive.google.com/file/d/10HUxh84NjqQmN2C4KSzdrvqocBWgmjDH/view?usp=share_link";
  return (
    <div name="home" className={props.mode ? "" : "dark"}>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-black dark:text-white flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Bakare Abdulwahab
        </h1>
        <p className=" bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text font-bold p-2">
          Web Developer
        </p>
        <div className="flex justify-center items-center">
          <p className=" text-xs py-4">
            I'm a web developer with 1+ years of experience. Using my design
            skills, I create beautiful user interfaces for web applications, and
            I also write tests and debug code to ensure quality. Additionally, I
            develop analytical and functional web applications using my problem-
            solving skills and industrial experience.
          </p>
          {/* <TypeAnimation
            className=" text-xs pl-1 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text"
            sequence={["BTB", 1000, "BTC", 1000, "& SASS", 1000]}
            speed={5}
            deletionSpeed={5}
            repeat={Infinity}
          /> */}
        </div>
        {/* <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p> */}
        <div>
          <a href={resume} target="_blank" rel="noreferrer">
            <button className=" shadow-xl hover:scale-110 duration-300 bg-gradient-to-r from-teal-600 to-cyan-600 w-[200px] rounded-md font-medium my-6 mx-auto cursor-pointer py-3 text-black dark:text-white">
              View Resume
              <span>
                <MdOutlineKeyboardArrowRight
                  className="inline-block ml-1"
                  size={20}
                />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
