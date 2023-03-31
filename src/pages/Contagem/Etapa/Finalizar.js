import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Notificar from "../../../components/Notificar";

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
    };

    dadosAtualizar.push(inputDados);

    setContagemAtualizar((contagemAtualizar) => [
      ...contagemAtualizar,
      inputDados,
    ]);
    localStorage.setItem("contagemAtualizar", JSON.stringify(dadosAtualizar));
    setarDados(idFiltrado);
    localStorage.setItem("dataContagem", JSON.stringify(idFiltrado));

    console.log(dadosAtualizar);
    reset();

    Notificar("Sucesso", "Registro Realizado com sucesso", "success", "bottom");
  }

  return (
    <div style={{ textAlign: "center", fontSize: "15px" }}>
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
