import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import MyNotes from "./Screens/MyNotes/MyNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./Screens/Loginpage/Loginpage";
import Registerpage from "./Screens/Registerpage/Registerpage";
import Createnote from "./Screens/Createnote/Createnote";
import Singlenote from "./Screens/singlenote/Singlenote";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="font-roboto ">
      <BrowserRouter>
        <Header setSearch={(s) => setSearch(s)} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
          </Routes>
          <Routes>
            <Route path="/mynotes" element={<MyNotes search={search} />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Loginpage />} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Registerpage />} />
          </Routes>
          <Routes>
            <Route path="/createnote" element={<Createnote />} />
          </Routes>
          <Routes>
            <Route path="/note/:id" element={<Singlenote />} exact />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
