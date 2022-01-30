// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Link, useNavigate } from "react-router-dom";
import Buttonalt from "../../components/button/Buttonalt";
import Loading from "../../components/loader/Loading";
import Error from "../../components/alert/Error";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const navigate =useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    if(userInfo){
      navigate('/mynotes');
    }
    // eslint-disable-next-line
  }, [userInfo]);
  

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
      <Buttonalt className="bg-green-500 hover:bg-green-700 rounded-lg xl:w-40 xl:h-12 mx-2">
        <Link to="/register">Register</Link>{" "}
      </Buttonalt>
      here
    </MainScreen>
  );
};

export default Loginpage;
