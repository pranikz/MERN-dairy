import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className}  shadow-lg bg-gray-600 hover:bg-gray-500 border-b-4 border-gray-400 hover:border-gray-200 text-black text-center py-2 px-4 rounded`}
    >
      {props.children}
    </button>
  );
};

export default Button;
