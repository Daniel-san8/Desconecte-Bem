import React from "react";
import SectionMobile from "./CadastroHome/SectionMobile";
import SectionInferiorMobile from "./CadastroHome/SectionInferiorMobile";
import WhiteBox from "./LoginHome/WhiteBox";
import BoxTitle from "./LoginHome/BoxTitle";
import InputLogin from "./LoginHome/InputLogin";
import ButtonLogin from "./LoginHome/ButtonLogin";

export default function EsqueciSenha() {
  React.useEffect(() => {
    document.title = "Esqueci a Senha | Desconecte Bem";
  }, []);

  return (
    <section className="flex flex-col items-center">
      <SectionMobile />
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>

      <WhiteBox espacamento="mt-28">
        <BoxTitle
          titulo="Esqueci minha senha"
          pergunta="Por favor, insira abaixo o e-mail com o qual vinculou sua conta para que possamos ajudá-lo(a) a recuperá-la."
        />
        <form action="" id="esqueci-senha-form">
          <div className="relative barra-horizontal">
            <InputLogin
              seletor="email-esqueci-senha"
              placeholder="E-mail"
              type="email"
              className="mt-5"
            />
          </div>
        </form>
      </WhiteBox>

      <ButtonLogin
        texto="Confirmar"
        idForm="esqueci-senha-form"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
      <SectionInferiorMobile />
    </section>
  );
}
