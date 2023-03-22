import Axios from "../../api";

const FunctionDemanda = {
  carregarDados: (url, setar) => {
    if (navigator.onLine) {
      Axios.get(`${url}`)
        .then((response) => {
          setar(response.data);
          localStorage.setItem(
            "dataDemandaConferencia",
            JSON.stringify(response.data)
          );
        })
        .catch((erro) => console.log(erro));
    } else {
      setar(JSON.parse(localStorage.getItem("dataDemandaConferencia")));
    }
  },
};

export default FunctionDemanda;
