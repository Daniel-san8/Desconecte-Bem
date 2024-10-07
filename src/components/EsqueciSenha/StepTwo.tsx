import React from "react";
import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBox from "../LoginHome/WhiteBox";

export default function StepTwo() {
  const global = useGlobal();
  const [emailUserState, setEmailUserState] = React.useState<string | null>(
    null
  );
  const emailUser = emailUserState ?? "[Inserir E-mail]";
  return (
    <>
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>
      <WhiteBox espacamento="mt-28">
        <div>
          <h1 className="text-2xl text-center font-semibold mt-6 mb-4 md:text-4xl md:text-start">
            Verifique seu E-mail
          </h1>
        </div>
        <BoxTitle
          className="text-sm text-center mb-2"
          pergunta={`Por favor, insira abaixo o código de 4 dígitos enviado para o endereço de e-mail ${emailUser}.`}
        />

        <form action="" method="post" id="esqueci-senha-form">
          <div className="relative barra-horizontal mt-2 stepTwoAfter">
            <InputLogin
              seletor="email-esqueci-senha"
              placeholder="Código"
              type="text"
            />
          </div>
        </form>

        <a
          href=""
          className="self-center underline text-sm pt-12 md:self-center md:pt-10"
        >
          Reenviar Código
        </a>
      </WhiteBox>

      <ButtonLogin
        functionButton={global.nextStep}
        texto="Confirmar"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </>
  );
}