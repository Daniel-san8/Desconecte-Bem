import React from "react";
import BoxTitle from "./LoginHome/BoxTitle";
import ButtonLogin from "./LoginHome/ButtonLogin";
import InputLogin from "./LoginHome/InputLogin";
import Sectionleft from "./LoginHome/SectionLeft";
import WhiteBox from "./LoginHome/WhiteBox";
import SectionMobile from "./CadastroHome/SectionMobile";
import SectionInferiorMobile from "./CadastroHome/SectionInferiorMobile";

export default function HomeCadastro() {
  React.useEffect(() => {
    document.title = "Cadastrar | Desconecte Bem";
  }, []);

  return (
    <div className="h-full bg-sectionRight font-Beiruti md:grid md:grid-cols-2 md:items-center">
      <Sectionleft />

      {/* div apenas para mobile */}

      <div className="bg-retangulo w-full h-24 mt-8"></div>

      <div className="h-screen bg-sectionRight flex flex-col justify-center items-center md:h-full">
        <SectionMobile />
        {/* finish */}
        <WhiteBox>
          <BoxTitle
            className="flex flex-col items-center md:items-center md:py-10"
            titulo="Cadastro"
            pergunta="Por favor, insira seus dados abaixo."
          />
          <form
            className="flex flex-col gap-y-4 md:gap-y-8 md:px-9"
            id="cadastroForm"
            method="post"
          >
            <div className="relative barra-horizontal afterEmail">
              <InputLogin type="email" seletor="email" placeholder="E-mail" />
            </div>
            <div className="relative barra-horizontal">
              <InputLogin type="Senha" seletor="Senha" placeholder="Senha" />
            </div>
            <div className="relative barra-horizontal afterConfirmarSenha">
              <InputLogin
                type="confirm"
                seletor="confirm"
                placeholder="Confirmar Senha"
              />
            </div>
          </form>
        </WhiteBox>

        <ButtonLogin
          className="text-white font-semibold bg-botaoLogin text-2xl px-6 py-1 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
          texto="Cadastrar-se"
          idForm="cadastroForm"
        />

        {/* div apenas para mobile */}

        <SectionInferiorMobile />
      </div>
    </div>
  );
}