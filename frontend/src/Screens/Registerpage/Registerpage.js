import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import Loading from "../../components/loader/Loading";
import Error from "../../components/alert/Error";

const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage(`Passwords don't match`);
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "/api/users",
          { name, pic, email, password },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  const postDetails = (pics) => {
      console.log("abc", pics)
    if (!pics) {
      return setPicMessage("select am Image");
    }
    setPicMessage(null);

    if (pics.type === "image/jpg" || pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "merndairy");
      data.append("cloudname", "pranikz");
      fetch("https://api.cloudinary.com/v1_1/pranikz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
        return(setPicMessage("Please select an Image"))
    }
  };

  return (
    <MainScreen title="Register">
      {loading && <Loading />}
      {error && <Error>{error}</Error>}
      {message && <Error>{message}</Error>}
      <div className="border p-10 rounded my-5">
        <form onSubmit={submitHandler}>
          <div className="py-2">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              className="border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="py-2">
            <label className="block mb-2">E-mail</label>
            <input
              type="text"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="py-2">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="py-2">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline"
            />
          </div>
        {picMessage && <Error>{picMessage}</Error>}
          <div className="py-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="user_avatar"
            >
              Upload Image
            </label>
            <input
              className="block w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              label="Select a image file"
              id="user_avatar"
              type="file"
              onChange={(e) => postDetails(e.target.files[0])}
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              A profile picture is useful to confirm your are logged into your
              account
            </div>
          </div>
          <div className="py-2">
            <button
              type="submit"
              className="w-full rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-solid border-2 border-green-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </MainScreen>
  );
};

export default Registerpage;
