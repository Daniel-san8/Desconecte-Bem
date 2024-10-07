import React from "react";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBox from "../LoginHome/WhiteBox";
import { useGlobal } from "../../globalStates/globalUse";

export default function BoxHome() {
  const global = useGlobal();

  return (
    <section className="w-full  flex flex-col items-center">
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>

      <WhiteBox espacamento="mt-28">
        <div>
          <h1 className="text-2xl text-center font-semibold mt-6 mb-4 md:text-3xl ">
            Esqueci minha senha
          </h1>
        </div>
        <BoxTitle
          className="text-sm text-center mb-6 md:px-8"
          pergunta="Por favor, insira abaixo o e-mail com o qual vinculou sua conta para que possamos ajudá-lo(a) a recuperá-la."
        />

        <form action="" method="post" id="esqueci-senha-form">
          <div className="relative barra-horizontal stepOneAfter md:px-8">
            <InputLogin
              seletor="email-esqueci-senha"
              placeholder="E-mail"
              type="email"
            />
          </div>
        </form>
      </WhiteBox>

      <ButtonLogin
        functionButton={global.nextStep}
        texto="Confirmar"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </section>
  );
}
