import React from "react";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBox from "../LoginHome/WhiteBox";
import { useGlobal } from "../../globalStates/globalUse";

export default function BoxHome() {
  const global = useGlobal();
  console.log(global.step);

  return (
    <>
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
        functionButton={global.nextStep}
        texto="Confirmar"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </>
  );
}
