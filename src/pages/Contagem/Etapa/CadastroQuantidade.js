import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function CadastroQuantidade(props) {
  const {
    qtdcx,
    qtdun,
    setarcx,
    setarun,
    setarhabilitar,
    setarpagina,
    setarEtapa,
  } = props;
  const [naoLocalizado, setNaoLocalizado] = useState("");
  return (
    <div style={{ textAlign: "initial" }}>
      <Form.Label>Quantidade</Form.Label>
      <Form.Control
        type="numeric"
        placeholder="Quantidade em Caixas"
        value={qtdcx}
        onChange={(e) => setarcx(e.target.value)}
        autoFocus
      />
      <Form.Text className="text-muted">
        informe a quantidade encontrada em Caixas, em caso de vazia digite 0 .
      </Form.Text>
      <Form.Control
        type="numeric"
        placeholder="Quantidade em Unidades"
        value={qtdun}
        onChange={(e) => setarun(e.target.value)}
      />
      <Form.Text className="text-muted">
        em caso de fração, informar quantidade de unidades no endereço.
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
            if (qtdcx.length > 0 && qtdun.length > 0) {
              setarpagina("finalizar");
              setNaoLocalizado("");
              setarEtapa(4);
            } else {
              setNaoLocalizado("Quantidade não pode ser vazia");
            }
          }}
          variant="primary"
          size="sm"
        >
          Proxima
        </Button>
      </div>
    </div>
  );
}
