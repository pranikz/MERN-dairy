import React from "react";

const Error = ({children}) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Holy smokes!</strong>
      <br/>
      <span className="block sm:inline">{children}</span>
      
    </div>
  );
};

export default Error;
