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
              I go by the name Bahkho, and I am a dedicated student at NSCC
              (Nova Scotia Community College) pursuing a degree in IT
              Programming. My journey in the world of technology began with a
              strong inclination towards web development, which remains my
              primary focus. Starting with web development, I soon expanded my
              skills to include Python programming. My commitment to growth has
              led me to thoroughly research industry roadmaps and diligently
              follow online tutorials to enhance my expertise.
              <br />
              <br />
              My passion for programming was first recognized by my parents, who
              encouraged me to further my education at NSCC. This decision has
              been instrumental in shaping my career in the IT field.
              <br />
              <br />
              Beyond coding, I have a diverse range of interests. In my free
              time, I enjoy the thrill of playing basketball and indulge in my
              fascination with crime movies. These interests provide a
              well-rounded perspective that complements my technical skills.
              <br />
              <br />I am driven by a continuous quest for knowledge and an
              unwavering dedication to my craft. I am excited about the
              opportunities that the world of IT programming offers and am
              committed to making a meaningful contribution. My journey is
              marked by a strong foundation in web development, proficiency in
              Python, and a relentless pursuit of excellence in the dynamic
              field of technology.
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
