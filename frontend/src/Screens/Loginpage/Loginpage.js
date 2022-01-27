import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import Buttonalt from "../../components/button/Buttonalt";
import axios from "axios";
import Loading from "../../components/loader/Loading";
import { useHistory } from "react-router-dom";
import Error from "../../components/alert/Error";


const Loginpage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify());

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <MainScreen title="Login">
      <div className="border p-10 my-5 rounded">
        {loading && <Loading />}
        {error && <Error>{error}</Error>}
        <form onSubmit={submitHandler}>
          <div>
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
            <button
              type="submit"
              className="w-full rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-solid border-2 border-green-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      New user?{" "}
      <Buttonalt className="bg-green-500 hover:bg-green-700 rounded-lg mx-2">
        <Link to="/register">Register</Link>{" "}
      </Buttonalt>
      here
    </MainScreen>
  );
};

export default Loginpage;
