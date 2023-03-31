import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Axios from "../../../api";
import ModalConfirmacao from "../../../components/Modal";
import Notificar from "../../../components/Notificar";

export default function Sincronizar() {
  const [show, setShow] = useState(false);
  const horaInicio = localStorage.getItem("inicioContagem");
  const idConferencia = localStorage.getItem("idConferencia");

  const verItens = JSON.parse(localStorage.getItem("contagemAtualizar"));

  async function UploadDados() {
    const dadosAtualizar = JSON.parse(
      localStorage.getItem("contagemAtualizar")
    );

    dadosAtualizar.map(async (item) => {
      const atualizar = await Axios.put(
        `/atualizarcontagem/${item.idContagem}`,
        {
          materialId: item.materialId,
          Quantidade: item.Quantidade,
          Unidade: item.Unidade,
          Lote: item.Lote,
          UnidadMedida: "cx",
        }
      ).then((response) => {
        Axios.put(`/atualizardemanda/${idConferencia}`, {
          Status: "Finalizado",
          Iniciado: horaInicio,
          Finalizado: new Date(),
        })
          .then(console.log("ok"))
          .catch((erro) => console.log(erro));
        console.log(response.data);
        Notificar(
          "Sucesso",
          "Registro Realizado com sucesso",
          "success",
          "bottom"
        );
        setShow(false);
      });
    });

    localStorage.removeItem("contagemAtualizar");

    /*Axios.put(`/atualizarcontagem/${verDados[0].id}`, {
      materialId: idSku,
      Quantidade: quantidade,
      Lote: lote,
      UnidadMedida: "cx",
    });*/
  }

  return (
    <div style={{ textAlign: "center" }}>
      <ModalConfirmacao ver={show} setarver={setShow} funcao={UploadDados} />
      <Form.Label> Sincronizar </Form.Label> <br></br>
      <Form.Text className="text-muted">
        para Sincronizar, você precisar estar conectado a internet.
      </Form.Text>
      <br></br>
      <br></br>
      {navigator.onLine ? (
        <div style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
          Conectado
        </div>
      ) : (
        <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
          Deconectado
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={() => setShow(true)}
          disabled={!navigator.onLine}
          variant="primary"
          size="sm"
        >
          Proximo
        </Button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      Itens a Sincronizar<br></br>
      {verItens?.length}
    </div>
  );
}
