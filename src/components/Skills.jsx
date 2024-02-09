// import html from "../assets/icons/html-icon.svg";
// import css from "../assets/icons/css-icon.svg";
import javascript from "../assets/icons/javascript-icon.svg";
import react from "../assets/icons/react-js-icon.svg";
// import bootstrap from "../assets/icons/bootstrap-5-logo-icon.svg";
import tailwind from "../assets/icons/tailwind-css-icon.svg";
// import windows from "../assets/icons/windows-10-icon.svg";
// import git from "../assets/icons/git-icon.svg";
// import github from "../assets/icons/github-icon.svg";
import sql from "../assets/icons/sql-server.svg";
// import redux from "../assets/icons/redux-icon.svg";
import figma from "../assets/icons/figma.svg";
import python from "../assets/icons/python.svg";
import firebase from "../assets/icons/firebase.svg";
import typescript from "../assets/icons/typescript-icon.svg";
import next from "../assets/icons/nextjs-icon.svg";
import cProgram from "../assets/icons/c.svg";
import java from "../assets/icons/java.svg";
import cSharp from "../assets/icons/c-sharp.svg";
import cPlusPlus from "../assets/icons/c-plus-plus.svg";
import kotlin from "../assets/icons/kotlin.svg";

const Skills = (props) => {
  const skills = [
    {
      id: 3,
      src: javascript,
      paragraph: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 14,
      src: typescript,
      paragraph: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id: 11,
      src: python,
      paragraph: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 16,
      src: java,
      paragraph: "Java",
      style: "shadow-blue-400",
    },
    {
      id: 17,
      src: cProgram,
      paragraph: "C Language",
      style: "shadow-indigo-700",
    },
    {
      id: 17,
      src: cPlusPlus,
      paragraph: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 17,
      src: cSharp,
      paragraph: "C#",
      style: "shadow-violet-700",
    },
    {
      id: 17,
      src: kotlin,
      paragraph: "Kotlin",
      style: "shadow-rose-400",
    },
    {
      id: 13,
      src: sql,
      paragraph: "Microsoft SQL Server",
      style: "shadow-red-700",
    },
    {
      id: 9,
      src: firebase,
      paragraph: "Firebase",
      style: "shadow-amber-600",
    },
    {
      id: 6,
      src: react,
      paragraph: "React JS",
      style: "shadow-sky-500",
    },
    {
      id: 15,
      src: next,
      paragraph: "Next JS",
      style: "shadow-slate-500",
    },
    {
      id: 5,
      src: tailwind,
      paragraph: "Tailwind CSS",
      style: "shadow-cyan-500",
    },

    // {
    //   id: 4,
    //   src: bootstrap,
    //   paragraph: "Bootstrap",
    //   style: "shadow-purple-500",
    // },

    // {
    //   id: 7,
    //   src: git,
    //   paragraph: "Git",
    //   style: "shadow-orange-600",
    // },
    // {
    //   id: 8,
    //   src: github,
    //   paragraph: "Github",
    //   style: "shadow-gray-500",
    // },
    // {
    //   id: 1,
    //   src: html,
    //   paragraph: "HTML",
    //   style: "shadow-orange-500",
    // },
    // {
    //   id: 2,
    //   src: css,
    //   paragraph: "CSS",
    //   style: "shadow-blue-500",
    // },

    // {
    //   id: 10,
    //   src: windows,
    //   paragraph: "Windows",
    //   style: "shadow-blue-600",
    // },
    {
      id: 12,
      src: figma,
      paragraph: "Figma",
      style: "shadow-violet-600",
    },
  ];

  return (
    <div name="skills" className={props.mode ? "" : "dark"}>
      <div className="w-full text-black dark:text-white dark:bg-[#1e293b] bg-[#e2e8f0] mt-8">
        <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center">
          <div>
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              Skills
            </p>
            <p className="py-6">These are the technologies I've work with</p>
          </div>

          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-center py-8 gap-8 px-12 sm:px-0">
            {skills.map(({ id, src, paragraph, style }) => (
              <div
                key={id}
                className={`rounded-lg py-2 shadow-md hover:scale-110 duration-500 ${style}`}
              >
                <img
                  src={src}
                  alt="/"
                  className=" w-[100px] h-[100px] mx-auto"
                />
                <p className="mt-4">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
