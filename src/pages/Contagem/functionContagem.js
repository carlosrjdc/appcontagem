import Axios from "../../api";

const FunctionContagem = {
  carregarDados: (url, setar, setarSku) => {
    const verdados = localStorage.getItem("dataContagem");

    Axios.get("/allmaterial")
      .then((response) => {
        setarSku(response.data);
        localStorage.setItem("dataSku", JSON.stringify(response.data));
      })
      .catch((erro) => console.log(erro));
    Axios.get(`${url}`)
      .then((response) => {
        setar(response.data);
        localStorage.setItem("dataContagem", JSON.stringify(response.data));
      })
      .catch((erro) => console.log(erro));
  },
};

export default FunctionContagem;
