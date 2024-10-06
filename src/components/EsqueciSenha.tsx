import React from "react";
import SectionMobile from "./CadastroHome/SectionMobile";
import SectionInferiorMobile from "./CadastroHome/SectionInferiorMobile";
import BoxHome from "./EsqueciSenha/BoxHome";
import { useGlobal } from "../globalStates/globalUse";

export default function EsqueciSenha() {
  const global = useGlobal();
  const estadoStep = global.estadoEsqueciSenha;
  React.useEffect(() => {
    document.title = "Esqueci a Senha | Desconecte Bem";
  }, []);

  return (
    <section className="flex flex-col items-center">
      <SectionMobile />
      {estadoStep.stepOne && <BoxHome />}
      <SectionInferiorMobile />
    </section>
  );
}
