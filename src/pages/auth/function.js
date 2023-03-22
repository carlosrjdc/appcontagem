import { useNavigate } from "react-router-dom";
import Axios from "../../api";

const FunctionAutenticar = (Usuario, Senha, navigate) => {
  console.log(Usuario);
  console.log(Senha);
  Axios.post(`/user/auth`, {
    Usuario: Usuario,
    Senha: Senha,
  })
    .then((response) => {
      console.log(response.data.token);
      localStorage.setItem("tkn", response.data.token);
      localStorage.setItem("id", response.data.user);
      navigate("/geral");
    })
    .catch((erro) => console.log(erro));
};

export default FunctionAutenticar;
