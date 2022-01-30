import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { updateProfile } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loader/Loading";
import Error from "../../components/alert/Error";
import { useNavigate } from "react-router-dom";
import Success from "../../components/alert/Success";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  }, [navigate, userInfo]);

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "merndairy");
      data.append("cloud_name", "pranikz");
      fetch("https://api.cloudinary.com/v1_1/pranikz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, pic }));
  };

  return (
    <MainScreen title={"Edit Profile"}>
      <div>
        <div className="xl:flex flex-row ">
          <div className="item xl:w-1/2 xl:h-96 p-2">
            <form>
              {loading && <Loading />}
              {success && <Success>Updated Successfully</Success>}
              {error && <Error>{error}</Error>}
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
              <div className="py-4">
                <label
                  className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="user_avatar"
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
              </div>
            </form>
          </div>
          <div
            className="item xl:w-1/2 xl:h-full p-2 border-black border-2 rounded"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            <img src={pic} alt={name} className="profilePic w-full h-full" />
          </div>
        </div>
        <div className="py-2 flex  xl:flex-none justify-center xl:justify-start">
          <button
            type="submit"
            onClick={submitHandler}
            className="w-2/3 xl:w-1/5 rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-solid border-2 border-green-600"
          >
            Update
          </button>
        </div>
      </div>
    </MainScreen>
  );
};

export default Profile;
