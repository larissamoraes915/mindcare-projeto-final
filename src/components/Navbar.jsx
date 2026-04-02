import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ logado, onLogout }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => setMenuAberto(false)}>
        MindCare
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuAberto ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuAberto(false)}>
          Home
        </Link>
        {logado && (
          <Link to="/psicologos" onClick={() => setMenuAberto(false)}>
            Psicólogos
          </Link>
        )}
        {logado && (
          <Link to="/agendamento" onClick={() => setMenuAberto(false)}>
            Agendamento
          </Link>
        )}
        {logado && (
          <Link to="/perfil" onClick={() => setMenuAberto(false)}>
            Perfil
          </Link>
        )}

        {!logado ? (
          <Link to="/login" onClick={() => setMenuAberto(false)}>
            Login
          </Link>
        ) : (
          <button
            onClick={() => {
              onLogout();
              setMenuAberto(false);
            }}
            className="btn-sair"
          >
            Sair
          </button>
        )}
      </div>
    </nav>
  );
}
