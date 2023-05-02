import React from "react";

const Contact = (props) => {
  return (
    <div name="contact" className={props.mode ? "" : "dark"}>
      <div className="w-full text-black dark:text-white h-screen">
        <div className="flex flex-col p-4 justify-center max-w-[1240px] mx-auto">
          <div className="pb-8">
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              Contact
            </p>
            <p>Submit the form below to get in touch with me</p>
          </div>

          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/69613a9e-9983-4757-b565-66c567dc1160"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className=" my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              ></textarea>
              <button className="px-6 py-3 mx-auto my-8 flex items-center hover:scale-110 duration-300 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-md">
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
