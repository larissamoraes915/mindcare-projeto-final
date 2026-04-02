import React, { useState, useRef } from "react";

export default function Perfil() {
  const [editando, setEditando] = useState(false);
  const [foto, setFoto] = useState(localStorage.getItem("user_photo") || null);
  const [cameraAtiva, setCameraAtiva] = useState(false);
  const videoRef = useRef(null);

  const [dados, setDados] = useState(() => {
    const salvos = localStorage.getItem("user_clinical_data");
    return salvos
      ? JSON.parse(salvos)
      : {
          nome: "Larissa Costa",
          plano: "Saúde Bradesco",
          emergencia: "(21) 99999-2200",
          foco: "Ansiedade e Depressão",
        };
  });

  const salvarDadosClinicos = () => {
    localStorage.setItem("user_clinical_data", JSON.stringify(dados));
    setEditando(false);
  };

  const iniciarCamera = async () => {
    try {
      setCameraAtiva(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert("Erro ao acessar câmera: " + err.message);
      setCameraAtiva(false);
    }
  };

  const capturar = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

    const dataUrl = canvas.toDataURL("image/png");
    setFoto(dataUrl);
    localStorage.setItem("user_photo", dataUrl);

    videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
    setCameraAtiva(false);
  };

  return (
    <div className="container">
      <h2>Prontuário Digital</h2>
      <div className="card profile-clinical">
        <div className="photo-section">
          {foto && !cameraAtiva ? (
            <img src={foto} alt="Identidade" className="foto-perfil-clinical" />
          ) : (
            !cameraAtiva && <div className="placeholder-clinic">Sem Foto</div>
          )}

          {cameraAtiva && (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="video-feed-clinical"
            />
          )}

          <button
            className="btn btn-secondary"
            onClick={cameraAtiva ? capturar : iniciarCamera}
          >
            {cameraAtiva ? "Confirmar Foto" : "Trocar Foto de Identificação"}
          </button>
        </div>

        <div className="info-section">
          {editando ? (
            <div className="edit-mode">
              <label>Nome:</label>
              <input
                className="input"
                value={dados.nome}
                onChange={(e) => setDados({ ...dados, nome: e.target.value })}
              />
              <label>Plano:</label>
              <input
                className="input"
                value={dados.plano}
                onChange={(e) => setDados({ ...dados, plano: e.target.value })}
              />
              <label>Emergência:</label>
              <input
                type="tel"
                className="input"
                value={dados.emergencia}
                onChange={(e) =>
                  setDados({ ...dados, emergencia: e.target.value })
                }
              />
              <label>Foco:</label>
              <textarea
                className="input"
                value={dados.foco}
                onChange={(e) => setDados({ ...dados, foco: e.target.value })}
              />
              <button className="btn" onClick={salvarDadosClinicos}>
                Salvar Prontuário
              </button>
            </div>
          ) : (
            <div className="view-mode">
              <h3>{dados.nome}</h3>
              <p>
                <strong>Paciente desde:</strong> 2026-03-30
              </p>
              <p>
                <strong>Plano:</strong> {dados.plano}
              </p>
              <p>
                <strong>Emergência:</strong> {dados.emergencia}
              </p>
              <div className="foco-box">
                <strong>Foco:</strong> {dados.foco}
              </div>
              <button className="btn" onClick={() => setEditando(true)}>
                Editar Informações
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
