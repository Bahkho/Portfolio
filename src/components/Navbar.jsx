import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import logo from "../assets/favicon.png";

const Navbar = (props) => {
  // USESTATE FOR NAVIGATION
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };

  //   ARRAY OF LINKS FOR NAVIGATION
  const links = [
    {
      id: 1,
      text: "home",
    },
    {
      id: 2,
      text: "about",
    },
    {
      id: 3,
      text: "projects",
    },
    {
      id: 4,
      text: "skills",
    },
    {
      id: 5,
      text: "resume",
    },
    {
      id: 6,
      text: "contact",
    },
  ];

  return (
    <div className={props.mode ? "" : "dark"}>
      <nav className="flex justify-between px-6 items-center w-full h-20 text-black dark:text-white">
        <div className="flex gap-3">
          <div
            onClick={handleNav}
            className="flex md:hidden items-center cursor-pointer"
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            {/* {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />} */}
          </div>

          <div className="flex cursor-pointer gap-3">
            <img src={logo} alt="logo" width={30} className="hidden md:flex" />
            <h1 className=" font-medium text-3xl ">
              Portfo
              <span className=" text-teal-600">lio.</span>
            </h1>
          </div>
        </div>

        <div className="flex">
          <ul className="hidden md:flex">
            {links.map(({ id, text }) => (
              <li
                key={id}
                className=" px-4 capitalize hover:underline hover:underline-offset-8 hover:text-teal-600 hover:decoration-4 cursor-pointer font-medium"
              >
                {text}
              </li>
            ))}
          </ul>
          <div
            className="flex items-center cursor-pointer"
            onClick={props.toggle}
          >
            {props.mode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </div>
        </div>
        {/* MOBILE NAVIGATION */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black dark:bg-white ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <div
            className=" text-white dark:text-black flex m-8 py-4 gap-2 cursor-pointer border-b border-gray-600"
            onClick={handleNav}
          >
            <img src={logo} alt="logo" width={30} />
            <h1 className=" font-medium text-3xl ">
              Portfo<span className=" text-teal-600">lio.</span>
            </h1>
          </div>
          <ul className="block text-white dark:text-black p-4">
            {links.map(({ id, text }) => (
              <li
                key={id}
                className=" p-4 uppercase hover:underline hover:underline-offset-8 hover:text-teal-600 hover:decoration-4 cursor-pointer font-medium"
                onClick={handleNav}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
