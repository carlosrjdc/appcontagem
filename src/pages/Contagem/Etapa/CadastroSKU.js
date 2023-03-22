import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function CadastroSku(props) {
  const { produtos, material, setar, setarpagina, setarMaterial, setarEtapa } =
    props;
  const [naoLocalizado, setNaoLocalizado] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Material</Form.Label>
          <Form.Control
            type="text"
            placeholder="SKU"
            value={material}
            onChange={(e) => setar(e.target.value)}
            autoFocus
          />
          <Form.Text className="text-muted">
            Faça a leitura do codigo de barras na caixa em caso de dificuldade
            digite o codigo do produto.
          </Form.Text>
        </Form.Group>
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
                produtos.filter(
                  (filtrar) =>
                    String(filtrar.Sku) === String(material) ||
                    String(filtrar.EAN14CX) === String(material) ||
                    String(filtrar.EAN13KG) === String(material)
                ).length > 0
              ) {
                const dadosFiltrado =
                  produtos.filter(
                    (filtrar) =>
                      String(filtrar.Sku) === String(material) ||
                      String(filtrar.EAN14CX) === String(material) ||
                      String(filtrar.EAN13KG) === String(material)
                  ).length > 0;

                setarMaterial(
                  produtos.filter(
                    (filtrar) =>
                      String(filtrar.Sku) === String(material) ||
                      String(filtrar.EAN14CX) === String(material) ||
                      String(filtrar.EAN13KG) === String(material)
                  )[0]
                );
                setarpagina("lote");
                setNaoLocalizado("");
                setarEtapa(2);
              } else {
                setNaoLocalizado("Material não localizado");
              }
            }}
            variant="primary"
            size="sm"
          >
            Proximo
          </Button>
        </div>
      </Form>
    </div>
  );
}
