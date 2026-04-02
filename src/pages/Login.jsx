import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate("/perfil");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Bem-vindo ao MindCare</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>E-mail:</label>
          <input
            type="email"
            className="input"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Senha:</label>
          <input
            type="password"
            className="input"
            placeholder="••••••••"
            required
          />
          <button className="btn">Entrar no Sistema</button>
        </form>
      </div>
    </div>
  );
}
