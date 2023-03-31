import { useLocation } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Cadastro from "./Cadastro";
import Lista from "./Lista";
import FunctionContagem from "./functionContagem";
import Sincronizar from "./Sincronizar";

import Sair from "./Logout";

export default function Contagem() {
  const arrayDados = JSON.parse(localStorage.getItem("contagemAtualizar"));
  const [value, setValue] = React.useState(0);
  const [skus, setSkus] = React.useState([]);
  const [dados, setDados] = React.useState([]);

  const ref = React.useRef(null);
  const location = useLocation();

  let dadosId = localStorage.getItem("idConferencia");

  React.useEffect(() => {
    FunctionContagem.carregarDados(
      `/registroconferenciaemaberto/${dadosId}`,
      setDados,
      setSkus
    );
  }, []);

  let Pagina = "";

  switch (value) {
    case 0:
      Pagina = <Cadastro />;
      break;
    case 1:
      Pagina = <Lista />;
      break;
    case 2:
      Pagina = <Sincronizar />;
      break;
    case 3:
      Pagina = <Sair />;
      break;
  }

  return (
    <div>
      {Pagina}

      <Box sx={{ pb: 7 }} ref={ref}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Cadastro" />
            <BottomNavigationAction label="Lista" />
            <BottomNavigationAction label="Sincronizar" />

            <BottomNavigationAction label="Sair" />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}
