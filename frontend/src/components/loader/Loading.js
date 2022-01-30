import React from "react";
import "../loader/Loader.css";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <div class="lds-dual-ring"></div>
    </div>
  );
};

export default Loading;
