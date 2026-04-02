import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Psicologos from "./pages/Psicologos";
import Login from "./pages/Login";
import Agendamento from "./pages/Agendamento";
import Perfil from "./pages/Perfil";
import "./styles/styles.css";

export default function App() {
  const [isLogado, setIsLogado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    if (token) setIsLogado(true);

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const body = document.body;

    if (/android/i.test(userAgent)) {
      body.classList.add("android-platform");
      body.classList.remove("ios-platform");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      body.classList.add("ios-platform");
      body.classList.remove("android-platform");
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("user_token", "true");
    setIsLogado(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    setIsLogado(false);
  };

  return (
    <BrowserRouter>
      <Navbar logado={isLogado} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/psicologos"
            element={isLogado ? <Psicologos /> : <Navigate to="/login" />}
          />
          <Route
            path="/agendamento"
            element={isLogado ? <Agendamento /> : <Navigate to="/login" />}
          />
          <Route
            path="/perfil"
            element={isLogado ? <Perfil /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
