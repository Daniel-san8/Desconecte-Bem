import React from "react";
import SectionMobile from "./CadastroHome/SectionMobile";
import SectionInferiorMobile from "./CadastroHome/SectionInferiorMobile";
import BoxHome from "./EsqueciSenha/BoxHome";
import { useGlobal } from "../globalStates/globalUse";

export default function EsqueciSenha() {
  const global = useGlobal();
  React.useEffect(() => {
    document.title = "Esqueci a Senha | Desconecte Bem";
  }, []);

  return (
    <section className="relative flex flex-col items-center">
      <SectionMobile />
      {<BoxHome />}
      <SectionInferiorMobile />
    </section>
  );
}
