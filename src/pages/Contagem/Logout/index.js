import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Sair() {
  const navigate = useNavigate();
  function deslogar() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div style={{ textAlign: "center", fontSize: "20px", padding: "4%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="text-muted">
            Para deslogar clique no botão abaixo.
          </Form.Text>
        </Form.Group>

        <div style={{ textAlign: "center" }}>
          <Button onClick={deslogar} variant="primary" size="sm">
            Sair
          </Button>
        </div>
      </Form>
    </div>
  );
}
