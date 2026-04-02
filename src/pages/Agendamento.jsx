import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Agendamento() {
  const location = useLocation();
  const [sucesso, setSucesso] = useState(false);
  const doutor = location.state?.doutor || "Não selecionado";

  if (sucesso) {
    return (
      <div className="container success-view">
        <div className="form-container">
          <h2>Agendamento Confirmado! ✓</h2>
          <p>
            Sua sessão com <strong>Dr(a). {doutor}</strong> foi marcada com
            sucesso.
          </p>
          <button className="btn" onClick={() => setSucesso(false)}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Agendar Sessão</h2>
      <div className="form-container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            setSucesso(true);
          }}
        >
          <label>Profissional:</label>
          <input
            className="input"
            value={`Dr(a). ${doutor}`}
            readOnly
            style={{ background: "#eee" }}
          />
          <label>Escolha a Data:</label>
          <input type="date" className="input" required />
          <button className="btn">Confirmar Horário</button>
        </form>
      </div>
    </div>
  );
}
