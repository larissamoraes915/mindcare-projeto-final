import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <section className="hero">
        <h1>Sua mente merece cuidado.</h1>
        <p className="hero-text">
          Conectamos você aos melhores psicólogos para atendimentos online
          seguros, acolhedores e profissionais.
        </p>
        <button
          className="btn hero-btn"
          onClick={() => navigate("/psicologos")}
        >
          Encontrar Psicólogo
        </button>
      </section>

      <section className="beneficios">
        <h2>Por que escolher o MindCare?</h2>
        <div className="cards">
          <div className="card">
            <h3>Atendimento 24h</h3>
            <p>Suporte emocional sempre que você precisar.</p>
          </div>
          <div className="card">
            <h3>Sigilo Total</h3>
            <p>Sessões criptografadas e ambiente seguro.</p>
          </div>
          <div className="card">
            <h3>Flexibilidade</h3>
            <p>Agende sessões no horário que melhor se adapta à sua rotina.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
