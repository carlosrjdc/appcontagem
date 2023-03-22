import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import FuncaoCadastro from "./function";
import { useEffect, useState } from "react";
import CadastroEndereco from "../Etapa/CadastroEndereco";
import CadastroSku from "../Etapa/CadastroSKU";
import CadastroLote from "../Etapa/CadastroLote";
import CadastroQuantidade from "../Etapa/CadastroQuantidade";
import Finalizar from "../Etapa/Finalizar";
import Etapas from "../Stepper";

export default function Cadastro() {
  const [material, setMaterial] = useState("");
  const [endereco, setEndereco] = useState("");
  const [lote, setLote] = useState("");
  const [quantidadecx, setQuantidadecx] = useState("");
  const [quantidadeun, setQuantidadeun] = useState("");
  const [key, setKey] = useState("endereco");
  const [dados, setDados] = useState([]);
  const [skus, setSkus] = useState([]);
  const [desabilitar, setDesabilitar] = useState(true);
  const [descMaterial, setDesMaterial] = useState({});
  const [idContagem, setIdContagem] = useState("");
  const [etapa, setEtapa] = useState(0);

  function resetar() {
    setMaterial("");
    setEndereco("");
    setLote("");
    setQuantidadecx("");
    setQuantidadeun("");
    setKey("endereco");
    setIdContagem("");
    setDesMaterial({});
  }

  useEffect(() => {
    setDados(JSON.parse(localStorage.getItem("dataContagem")));
    setSkus(JSON.parse(localStorage.getItem("dataSku")));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="endereco" title="End" disabled>
          <CadastroEndereco
            data={dados}
            posicao={endereco}
            setar={setEndereco}
            setarpagina={setKey}
            setarIdContagem={setIdContagem}
            desabilitar={desabilitar}
            setarEtapa={setEtapa}
          />
        </Tab>
        <Tab eventKey="produto" title="Sku" disabled>
          <CadastroSku
            produtos={skus}
            setar={setMaterial}
            material={material}
            setarpagina={setKey}
            setarMaterial={setDesMaterial}
            setarEtapa={setEtapa}
          />
        </Tab>
        <Tab eventKey="lote" title="Lote" disabled={desabilitar}>
          <CadastroLote
            lote={lote}
            setar={setLote}
            setarpagina={setKey}
            setarEtapa={setEtapa}
          />
        </Tab>
        <Tab eventKey="quantidade" title="Qtd." disabled={desabilitar}>
          <CadastroQuantidade
            qtdcx={quantidadecx}
            qtdun={quantidadeun}
            setarcx={setQuantidadecx}
            setarun={setQuantidadeun}
            setarpagina={setKey}
            setarEtapa={setEtapa}
          />
        </Tab>
        <Tab eventKey="finalizar" title="Finalizar" disabled={desabilitar}>
          <Finalizar
            data={{
              material: material,
              endereco: endereco,
              lote: lote,
              quantidadecx: quantidadecx,
              quantidadeun: quantidadeun,
              descMaterial,
            }}
            todosDados={dados}
            idContagem={idContagem}
            reset={resetar}
            setarhabilitar={setDesabilitar}
            setarDados={setDados}
            setarEtapa={setEtapa}
          />
        </Tab>
      </Tabs>
      <div style={{ marginTop: "40%" }}>
        <Etapas etapa={etapa} />
      </div>
    </div>
  );
}
