import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className}  shadow-lg  border-b-4  text-black text-center px-2 rounded`}
    >
      {props.children}
    </button>
  );
};

export default Button;
