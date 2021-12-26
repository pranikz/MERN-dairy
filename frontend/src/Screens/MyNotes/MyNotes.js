import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Buttonalt from "../../components/button/Buttonalt";
import MainScreen from "../../components/MainScreen";
import notes from "../../data/notes";
import Card from "../../components/Card/Card";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  return (
    <MainScreen title={"Welcome Back Pratyush Mahapatra"}>
      <Link to="/createnote">
        <Button className="ml-3 mb-1 w-56 text-white">Create New Note</Button>
      </Link>
      {notes.map((note, index) => {
        return (
          <div className="w-full p-4">
            <div className="p-5 rounded-xl shadow-md bg-white">
              <span className="text-6xl">❝</span>
              <div className="mb-5 ">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-5 text-sm font-medium text-left text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-lg">
                        <span className="block">{note.title}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                        <p className="text-base">{note.content}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              <span class="bg-yellow-500 text-yellow-50  py-1 px-2 rounded text-xs font-bold ml-1">
                Category
              </span>
              <hr className="my-4 " />

              <div className="flex flex-wrap items-center">
                <div className=" flex space-x-20  lg:flex-grow lg:w-full justify-between">
                  <p className="my-auto text-xs items-center  lg:text-xl text-gray-500">
                    Created on {note.date}
                  </p>
                  <div className=" flex space-x-5">
                    <a href={`/note/${note._id}`}>
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
                    </a>

                    <Buttonalt
                      onClick={() => deleteHandler(note._id)}
                      className="items-center w-10 h-10 rounded-xl text-sm bg-red-600 hover-bg-red-300"
                    >
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
      })}
    </MainScreen>
  );
};

export default MyNotes;
