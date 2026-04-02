import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

export default function Psicologos() {
  const [psicologos, setPsicologos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((data) => setPsicologos(data.results));
  }, []);

  return (
    <div className="container">
      <h2>Escolha seu Especialista</h2>
      <div className="cards">
        {psicologos.map((p, index) => (
          <Card
            key={index}
            titulo={`Dr(a). ${p.name.first} ${p.name.last}`}
            foto={p.picture.large}
            descricao="Foco em terapia cognitivo-comportamental."
            onAgendar={() =>
              navigate("/agendamento", {
                state: { doutor: `${p.name.first} ${p.name.last}` },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}
