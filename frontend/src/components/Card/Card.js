import React from "react";
import Buttonalt from "../button/Buttonalt";

const Card = (props) => {
  return (
    <div className="w-full p-4">
      <div className="p-8 rounded-xl shadow-md bg-white">
        <span className="text-6xl">❝</span>
        <span className="block">{props.title}</span>
        <p className="text-base">{props.content}</p>
        <hr className="my-4 " />
        <div className="flex flex-wrap items-center">
          <div className=" flex space-x-20  lg:flex-grow lg:w-full justify-between">
            <p className="my-auto  items-center text-base lg:text-xl text-gray-500">
              {props.date}
            </p>
            <div className=" flex space-x-5">
              <Buttonalt className="items-center w-10 h-10  rounded-xl text-sm bg-green-600 hover:bg-green-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </Buttonalt>
              <Buttonalt className="items-center w-10 h-10 rounded-xl text-sm bg-red-600 hover-bg-red-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 7-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"
                  />
                </svg>
              </Buttonalt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
