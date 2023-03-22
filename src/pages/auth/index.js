import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import FuncaoAutenticar from "./function.js";
import { useNavigate } from "react-router-dom";

export default function Autenticar() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ padding: "4%", fontWeight: "bold" }}>
      <div
        style={{ marginBottom: "15%", fontWeight: "bold", textAlign: "center" }}
      >
        AUTENTICAR
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            placeholder="ID"
          />
          <Form.Label>Senha</Form.Label>
          <Form.Control
            onChange={(e) => setSenha(e.target.value)}
            type="text"
            placeholder="Senha"
          />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={() => FuncaoAutenticar(usuario, senha, navigate)}
            variant="primary"
            size="sm"
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}
