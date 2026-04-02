import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Card({ titulo, descricao, foto, onAgendar }) {
  const [visivel, setVisivel] = useState(true);

  const handlers = useSwipeable({
    onSwipedLeft: () => setVisivel(false),
    onSwipedRight: () => alert("Adicionado aos favoritos!"),
    trackMouse: true,
  });

  if (!visivel) return null;

  return (
    <div {...handlers} className="card">
      {foto && <img src={foto} alt={titulo} className="card-img" />}
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button className="btn" onClick={onAgendar}>
        Agendar sessão
      </button>
    </div>
  );
}
