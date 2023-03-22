import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FunctionDemanda from "./function.js";
import Axios from "../../api";
import ModalConfirmacao from "../../components/Modal/index.js";

export default function DemandasConferencia() {
  const [demandaConferencia, setDemandaConferencia] = useState([]);
  const [show, setShow] = useState(false);
  const [idRef, setIdRef] = useState("");
  const verificarData = localStorage.getItem("inicioContagem");

  const navigate = useNavigate();
  const tkn = localStorage.getItem("tkn");
  const iddata = localStorage.getItem("id");

  function InicialConferencia() {
    localStorage.setItem("idConferencia", idRef);
    localStorage.setItem(
      "inicioContagem",
      JSON.stringify({
        inicioConferencia: new Date(),
        identificador: idRef,
      })
    );
    navigate("/contagem", { state: { idConferencia: idRef } });
  }

  useEffect(() => {
    if (!tkn) {
      navigate("/");
    } else {
      FunctionDemanda.carregarDados(
        `/buscardemandas/${iddata}/Não iniciado`,
        setDemandaConferencia
      );
    }
  }, []);

  return (
    <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "3%" }}>
      DEMANDAS
      <ModalConfirmacao
        ver={show}
        setarver={setShow}
        funcao={InicialConferencia}
      />
      {demandaConferencia.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "4%",
              margin: "1%",
              background: "#a2ceda",
              borderRadius: "4px",
            }}
            onClick={() => {
              if (!verificarData) {
                setShow(true);
                setIdRef(item.id);
              } else {
                setIdRef(item.id);
                InicialConferencia();
              }
            }}
          >
            <div>{item.id}</div>
            <div>{item.Status}</div>
            <div>{item.Data}</div>
          </div>
        );
      })}
    </div>
  );
}
