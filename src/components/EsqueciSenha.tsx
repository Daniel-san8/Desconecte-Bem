import React from "react";
import SectionMobile from "./CadastroHome/SectionMobile";
import SectionInferiorMobile from "./CadastroHome/SectionInferiorMobile";
import BoxHome from "./EsqueciSenha/BoxHome";
import { useGlobal } from "../globalStates/globalUse";
import StepTwo from "./EsqueciSenha/StepTwo";
import Sectionleft from "./LoginHome/SectionLeft";
import StepThree from "./EsqueciSenha/StepThree";
import StepFour from "./EsqueciSenha/StepFour";

export default function EsqueciSenha() {
  const global = useGlobal();
  const { step } = global;
  React.useEffect(() => {
    document.title = "Esqueci a Senha | Desconecte Bem";
  }, []);

  React.useEffect(() => {
    global.resetStep();

    return () => global.resetStep();
  }, []);

  return (
    <section className="relative flex flex-col md:grid md:grid-cols-2 items-center md:flex-row md:justify-center">
      <Sectionleft />
      <SectionMobile />
      {step.stepOne && <BoxHome />}
      {step.stepTwo && <StepTwo />}
      {step.stepThree && <StepThree />}
      {step.stepFour && <StepFour />}
      <SectionInferiorMobile />
    </section>
  );
}
