import React from "react";
import SectionMobile from "./CadastroHome/SectionMobile";
import SectionInferiorMobile from "./CadastroHome/SectionInferiorMobile";

export default function EsqueciSenha() {
  React.useEffect(() => {
    document.title = "Esqueci a Senha | Desconecte Bem";
  }, []);

  return (
    <section>
      <SectionMobile />
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>

      <SectionInferiorMobile />
    </section>
  );
}
