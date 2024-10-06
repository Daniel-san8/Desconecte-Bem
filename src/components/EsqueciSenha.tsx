import React from "react";
import SectionMobile from "./CadastroHome/SectionMobile";
import SectionInferiorMobile from "./CadastroHome/SectionInferiorMobile";
import BoxHome from "./EsqueciSenha/BoxHome";
import { useGlobal } from "../globalStates/globalUse";
import StepTwo from "./EsqueciSenha/StepTwo";

export default function EsqueciSenha() {
  const global = useGlobal();
  const { step } = global;
  React.useEffect(() => {
    document.title = "Esqueci a Senha | Desconecte Bem";
  }, []);

  return (
    <section className="relative flex flex-col items-center">
      <SectionMobile />
      {step.stepOne && <BoxHome />}
      {step.stepTwo && <StepTwo />}

      <SectionInferiorMobile />
    </section>
  );
}
