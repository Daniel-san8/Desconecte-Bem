import React from "react";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import { useGlobal } from "../../globalStates/globalUse";
import WhiteBoxEsqueci from "./WhiteBoxEsqueci";

export default function BoxHome() {
  const global = useGlobal();

  return (
    <section className="w-full  flex flex-col items-center">
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>

      <WhiteBoxEsqueci size="small">
        <div>
          <h1 className="text-2xl text-center font-semibold md:text-3xl ">
            Esqueci minha senha
          </h1>
        </div>
        <BoxTitle
          className="text-sm text-center my-3 md:px-8"
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
      </WhiteBoxEsqueci>

      <ButtonLogin
        functionButton={global.nextStep}
        texto="Confirmar"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </section>
  );
}
