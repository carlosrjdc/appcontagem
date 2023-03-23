import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function CadastroLote(props) {
  const { lote, setar, setarpagina, setarEtapa } = props;
  const [naoLocalizado, setNaoLocalizado] = useState("");
  return (
    <div>
      <Form.Label>Lote</Form.Label>
      <Form.Control
        type="numeric"
        placeholder="Lote"
        value={lote}
        onChange={(e) => setar(e.target.value)}
        autoFocus
      />
      <Form.Text className="text-muted">Informe o lote do produto.</Form.Text>

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
            if (lote.length > 6) {
              setarpagina("quantidade");
              setNaoLocalizado("");
              setarEtapa(3);
            } else {
              setNaoLocalizado("quantidade de Caracter menor que o padrão");
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
