import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNoteAction, updateNoteAction } from "../../actions/notesAction";
import Loading from "../../components/loader/Loading";
import Error from "../../components/alert/Error";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const Singlenote = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    navigate("/mynotes");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(id, title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    navigate("/mynotes");
  };

  return (
    <MainScreen title="Create a Note">
      <div className="border p-5 rounded my-1">
        <div className="bg-gray-200 font-semibold text-lg lg:text-4xl p-4 rounded-xl">
          <h1>Edit your note</h1>
        </div>

        <form>
          {loadingDelete && <Loading />}
          {error && <Error>{error}</Error>}
          {errorDelete && <Error>{error}</Error>}

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
            Updated on - {date.substring(0, 10)}
          </cite>

          {loading && <Loading />}
        </form>
        <div className="py-2 space-x-10 xl:space-x-20 flex justify-center mt-10">
          <button
            onClick={updateHandler}
            className="w-2/4 xl:w-1/3 rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-solid border-2 border-green-600"
          >
            Update Note
          </button>
          <button
            type="submit"
            onClick={() => deleteHandler(id)}
            className=" w-2/4 xl:w-1/3 rounded bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border-solid border-2 border-red-600"
          >
            Delete Note
          </button>
        </div>
      </div>
    </MainScreen>
  );
};

export default Singlenote;
