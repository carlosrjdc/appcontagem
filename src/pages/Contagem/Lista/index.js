import { useEffect, useState } from "react";

export default function Lista() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    setDados(JSON.parse(localStorage.getItem("dataContagem")));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      LISTA DE ENDEREÇOS:
      {dados.map((item) => (
        <div
          style={{
            padding: "4%",
            background: "#a2ceda",
            margin: "1%",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
            }}
          >
            <div>CORREDOR: {item.Corredor}</div>
            <div style={{ color: "red" }}>PREDIO: {item.Predio}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>ZONA: {item.Zona}</div>
            <div>NIVEL: {item.Nivel}</div>
          </div>
          <div style={{ textAlign: "initial" }}>ENDEREÇO: {item.Endereco}</div>
        </div>
      ))}
    </div>
  );
}
