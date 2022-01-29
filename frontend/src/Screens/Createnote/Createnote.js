import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNoteAction } from "../../actions/notesAction";
import Loading from "../../components/loader/Loading";
import Error from "../../components/alert/Error";
import ReactMarkdown from "react-markdown";

const Createnote = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;
  console.log(note);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    navigate("/mynotes");
  };
  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Note">
      <div className="border p-5 rounded my-1">
        <div className="bg-gray-200 font-semibold text-lg lg:text-4xl p-4 rounded-xl">
          <h1>Create a new note</h1>
        </div>

        <form>
          {error && <Error >{error}</Error>}
          <div className="py-2 px-2">
            <label className="block mb-2 ">Title </label>
            <input
              type="text"
              value={title}
              placeholder="Enter the title"
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="py-2 px-2">
            <label className="block mb-2 ">Content</label>
            <textarea
              rows="3"
              className="border p-2 w-full rounded-md"
              placeholder="Write something..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="py-2 px-2">
              <label className="block mb-2 ">Preview</label>
              <div className="border rounded py-2 px-3 w-full h-auto focus:outline-none focus:shadow-outline">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </div>
          <div className="py-2 px-2">
            <label className="block mb-2 ">Category</label>
            <input
              type="text"
              value={category}
              placeholder="Enter the category"
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline"
            />
          </div>
          <cite className="text-gray-500 p-2">
            Creating on: {new Date().toLocaleDateString()}{" "}
          </cite>

          {loading && <Loading />}
        </form>
        <div className="py-2 space-x-10 xl:space-x-20 flex justify-center mt-10">
          <button
            onClick={submitHandler}
            className="w-2/4 xl:w-1/3 rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-solid border-2 border-green-600"
          >
            Create
          </button>
          <button
            type="submit"
            onClick={resetHandler}
            className=" w-2/4 xl:w-1/3 rounded bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border-solid border-2 border-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </MainScreen>
  );
};

export default Createnote;
