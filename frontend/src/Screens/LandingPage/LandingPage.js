import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/mynotes");
    }// eslint-disable-next-line
  }, []);

  return (
    <div
      className="flex bg-center bg-scroll items-center min-h-screen"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=fill&w=2400&q=100)`,
      }}
    >
      <div className="container mx-auto grid place-items-center px-3 w-full my-10">
        <span className="block text-3xl lg:text-6xl">Welcome To MyDiary</span>
        <span className="block text-sm lg:text-xl ">
          One safe place for all your thoughts
        </span>
        <div className="space-x-10 mt-5 lg:text-xl flex justify-evenly">
          <Link to="/login">
            <Button className="lg:h-16 lg:w-40 text-white">Log in</Button>
          </Link>
          <Link to="/register">
            <Button className="text-white lg:h-16 lg:w-40  ">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
