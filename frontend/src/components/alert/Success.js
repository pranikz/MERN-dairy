import React from "react";

const Success = ({ children }) => {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">YAY!! </strong>
      <br />
      <span className="block sm:inline">{children}</span>
    </div>
  );
};

export default Success;
