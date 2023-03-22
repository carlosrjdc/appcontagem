import { createBrowserRouter, Link } from "react-router-dom";
import Autenticar from "../pages/auth";
import Contagem from "../pages/Contagem";
import Cadastro from "../pages/Contagem/Cadastro";
import DemandasConferencia from "../pages/DemandasConferencia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Autenticar />,
  },
  {
    path: "/geral",
    element: <DemandasConferencia />,
  },
  {
    path: "/contagem",
    element: <Contagem />,
  },
]);

export default router;
