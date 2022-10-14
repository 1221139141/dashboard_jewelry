import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./pages/header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/LogIn/Login";
import Profil from "./pages/Profil/Profil";
import TestSignup from "./pages/testSignup/TestSignup";

function App() {
  const [token, setToken] = useState(null);

  const setAdmin = (token) => {
    if (token !== null) {
      Cookies.set("adminToken", token);
    } else {
      Cookies.remove("adminToken");
    }
    setToken(token);
  };

  return (
    <div className="App">
      <Header token={token} setAdmin={setAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil token={token} />} />
        <Route path="/inscription" element={<TestSignup setAdmin={setAdmin} />}/>
        <Route path="/connexion" element={<Login setAdmin={setAdmin} />} />
      </Routes>
    </div>
  );
}

export default App;
