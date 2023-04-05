import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Notificar from "../../../components/Notificar";
import Axios from "../../../api";

const dadosAtualizar = [];

export default function Finalizar(props) {
  const { data, reset, setarDados, idContagem, todosDados } = props;
  const [contagemAtualizar, setContagemAtualizar] = useState([]);

  //setSkus(JSON.parse(localStorage.getItem("dataSku")));
  //localStorage.setItem("id", response.data.user);

  async function FinalizarContagem() {
    const idFiltrado = await todosDados.filter(
      (filtrar) => parseInt(filtrar.id) !== parseInt(idContagem)
    );
    const inputDados = {
      idContagem,
      materialId: data?.descMaterial?.id,
      Lote: data.lote,
      Quantidade: data?.quantidadecx,
      Unidade: data?.quantidadeun,
    };

    const atualizar = await Axios.put(
      `/atualizarcontagem/${inputDados.idContagem}`,
      {
        materialId: inputDados.materialId,
        Quantidade: inputDados.Quantidade,
        Unidade: inputDados.Unidade,
        Lote: inputDados.Lote,
        UnidadMedida: "cx",
      }
    ).then((response) => {
      console.log(response.data);
      Notificar(
        "Sucesso",
        "Registro Realizado com sucesso",
        "success",
        "bottom"
      );
    });

    reset();
  }

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "18px",
        marginTop: "10.5%",
        fontWeight: "bold",
        color: "red",
      }}
    >
      <Form.Text className="text-muted">
        ENDEREÇO: {data.endereco} <br></br>
        SKU: {data?.descMaterial?.Sku} <br></br>
        {data?.descMaterial?.Descricao} <br></br>
        Empresa: {data?.descMaterial?.Hierarquia} <br></br>
        Segmento: {data?.descMaterial?.Familia} <br></br>
        <br></br>
        Quantidade Caixas: {data?.quantidadecx} <br></br>
        Quantidade Unidade: {data?.quantidadeun} <br></br>
      </Form.Text>

      <div style={{ textAlign: "center" }}></div>

      <div>
        <br></br>
        <br></br>
        <Button onClick={FinalizarContagem} variant="primary" size="sm">
          Finalizar
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <Button onClick={reset} variant="primary" size="sm">
          Editar
        </Button>
      </div>
    </div>
  );
}
