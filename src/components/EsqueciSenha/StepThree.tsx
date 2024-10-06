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
        <BoxTitle
          titulo="Crie uma Nova Senha"
          pergunta="Lembre-se de que sua nova senha precisa ser diferente daquela estabelecida anteriormente."
        />

        <form action="" method="post" id="esqueci-senha-form">
          <div className="relative barra-horizontal mt-4">
            <InputLogin
              seletor="email-esqueci-senha"
              placeholder="Nova Senha"
              type="password"
            />
          </div>
          <div className="relative barra-horizontal mt-4">
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
