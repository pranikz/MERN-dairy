import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import MyNotes from "./Screens/MyNotes/MyNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./Screens/Loginpage/Loginpage";
import Registerpage from "./Screens/Registerpage/Registerpage";

function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {" "}
            <Route path="/" element={<LandingPage />} exact />
          </Routes>
          <Routes>
            <Route path="/mynotes" element={<MyNotes />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Loginpage />} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Registerpage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
