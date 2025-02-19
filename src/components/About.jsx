import React from "react";
// import pics from "../assets/pics.jpg";
import picture from "../assets/images.jpg";

const About = (props) => {
  return (
    <div name="about" className={props.mode ? "" : "dark"}>
      <div className="w-full dark:bg-[#1e293b] bg-[#e2e8f0] py-16 px-4 text-black dark:text-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              About Me
            </h1>
            <p>
              I am a passionate <strong>IT programmer</strong> with a 
              <strong> 2-year diploma in IT Programming from Nova Scotia Community College (NSCC)</strong>. 
              My expertise lies in <strong>full-stack development, cloud computing, and software engineering</strong>. 
              I have hands-on experience building web applications using 
              <strong> React.js, Node.js, Express, and databases like MongoDB and Firebase</strong>.
              <br />
              <br />
              With a strong foundation in <strong>problem-solving, data structures, and algorithms</strong>, 
              I am constantly improving my skills in <strong>DevOps, cloud computing, and cybersecurity</strong>. 
              I enjoy working on innovative projects that enhance user experience and streamline processes.
              <br />
              <br />
              Currently, I am exploring <strong>cloud technologies like AWS and Azure</strong>, aiming to integrate 
              scalable and secure solutions into my development workflow. My goal is to 
              <strong> leverage technology to create impactful and efficient applications</strong>.
              <br />
              <br />
              Beyond coding, I enjoy playing football, going to the gym, traveling, and watching crime and action movies. 
              These hobbies give me a well-rounded perspective and keep me motivated in my tech journey.
            </p>

          </div>
          <img
            className="w-[66%] mx-auto my-4 rounded-xl"
            src={picture}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
