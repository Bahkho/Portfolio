import React from "react";

const Hero = (props) => {
  return (
    <div className={props.mode ? "" : "dark"}>
      <section className="text-black dark:text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        dolorem, quisquam, tenetur deleniti nemo dolorum, similique autem enim
        atque nulla velit at adipisci animi. Labore id ipsum eligendi ipsam
        fugiat.
      </section>
    </div>
  );
};

export default Hero;
