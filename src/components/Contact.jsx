import React from "react";

const Contact = (props) => {
  return (
    <div className={props.mode ? "" : "dark"}>
      <div className="w-full text-black dark:text-white">Contact</div>
    </div>
  );
};

export default Contact;
