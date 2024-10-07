import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBox from "../LoginHome/WhiteBox";

export default function StepThree() {
  const global = useGlobal();
  return (
    <>
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>
      <WhiteBox espacamento="mt-28">
        <div>
          <h1 className="text-2xl text-center font-semibold my-2 md:text-4xl md:text-start">
            Crie uma Nova Senha
          </h1>
        </div>
        <BoxTitle
          className="text-sm text-center mb-2"
          pergunta="Lembre-se de que sua nova senha precisa ser diferente daquela estabelecida anteriormente."
        />

        <form
          action=""
          method="post"
          id="esqueci-senha-form"
          className="flex flex-col gap-y-1"
        >
          <div className="relative barra-horizontal mt-4">
            <InputLogin
              seletor="email-esqueci-senha"
              placeholder="Nova Senha"
              type="password"
            />
          </div>
          <div className="relative barra-horizontal mt-4 stepThreeAfter">
            <InputLogin
              seletor="email-esqueci-senha-confirm"
              placeholder="Confirme sua nova senha"
              type="password"
            />
          </div>
        </form>
      </WhiteBox>

      <ButtonLogin
        functionButton={global.nextStep}
        texto="Salvar"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </>
  );
}
