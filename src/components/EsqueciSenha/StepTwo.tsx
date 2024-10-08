import React from "react";
import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBoxEsqueci from "./WhiteBoxEsqueci";

export default function StepTwo() {
  const global = useGlobal();
  const [emailUserState, setEmailUserState] = React.useState<string | null>(
    null
  );
  const emailUser = emailUserState ?? "[Inserir E-mail]";
  return (
    <section className="w-full flex flex-col items-center">
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>
      <WhiteBoxEsqueci size="small">
        <div>
          <h1 className="text-3xl text-center font-semibold md:text-3xl">
            Verifique seu E-mail
          </h1>
        </div>
        <BoxTitle
          className="text-base text-center mt-1 md:px-8"
          pergunta={`Por favor, insira abaixo o código de 4 dígitos enviado para o endereço de e-mail ${emailUser}.`}
        />

        <form action="" method="post" id="esqueci-senha-form">
          <div className="relative barra-horizontal stepTwoAfter md:px-8">
            <InputLogin
              seletor="email-esqueci-senha"
              placeholder="Código"
              type="text"
            />
          </div>
        </form>

        <a
          href=""
          className="self-center underline text-sm pt-10 md:self-center md:pt-10"
        >
          Reenviar Código
        </a>
      </WhiteBoxEsqueci>

      <ButtonLogin
        functionButton={global.nextStep}
        texto="Confirmar"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </section>
  );
}
