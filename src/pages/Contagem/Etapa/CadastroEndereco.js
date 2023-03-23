import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function CadastroEndereco(props) {
  const { data, posicao, setar, setarpagina, setarIdContagem, setarEtapa } =
    props;
  const [naoLocalizado, setNaoLocalizado] = useState("");
  return (
    <div style={{ textAlign: "initial" }}>
      <Form.Label>Endereço</Form.Label>
      <Form.Control
        type="text"
        placeholder="Posição"
        value={posicao}
        onChange={(e) => setar(e.target.value)}
        autoFocus
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (
              data?.filter(
                (filtrar) => String(filtrar.Endereco) === String(posicao)
              ).length > 0
            ) {
              setarIdContagem(
                data.filter(
                  (filtrar) => String(filtrar.Endereco) === String(posicao)
                )[0]?.id
              );
              setarpagina("produto");
              setNaoLocalizado("");
              setarEtapa(1);
            } else {
              setNaoLocalizado("Endereço não Localizado nas suas demandas");
            }
          }
        }}
      />
      <Form.Text className="text-muted">
        Faça a leitura do codigo de barras ou QRCode colada na posição.
      </Form.Text>
      <div
        style={{
          padding: "5%",
          fontWeight: "bold",
          textAlign: "center",
          color: "red",
        }}
      >
        {naoLocalizado}
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={() => {
            if (
              data?.filter(
                (filtrar) => String(filtrar.Endereco) === String(posicao)
              ).length > 0
            ) {
              setarIdContagem(
                data.filter(
                  (filtrar) => String(filtrar.Endereco) === String(posicao)
                )[0]?.id
              );
              setarpagina("produto");
              setNaoLocalizado("");
              setarEtapa(1);
            } else {
              setNaoLocalizado("Endereço não Localizado nas suas demandas");
            }
          }}
          variant="primary"
          size="sm"
        >
          Proximo
        </Button>
      </div>
    </div>
  );
}
