import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBox from "../LoginHome/WhiteBox";

export default function StepTwo() {
  const global = useGlobal();
  return (
    <>
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>
      <WhiteBox espacamento="mt-28">
        <BoxTitle
          titulo="Verifique seu E-mail"
          pergunta="Por favor, insira abaixo o código de 4 dígitos enviado para o endereço de e-mail [Inserir E-mail]."
        />

        <form action="" method="post" id="esqueci-senha-form">
          <div className="relative barra-horizontal">
            <InputLogin
              seletor="email-esqueci-senha"
              placeholder="Código"
              type="text"
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
