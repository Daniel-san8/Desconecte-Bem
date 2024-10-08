import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBoxEsqueci from "./WhiteBoxEsqueci";

export default function StepThree() {
  const global = useGlobal();
  return (
    <section className="w-full  flex flex-col items-center">
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>
      <WhiteBoxEsqueci>
        <div>
          <h1 className="text-2xl text-center font-semibold md:text-3xl ">
            Crie uma Nova Senha
          </h1>
        </div>
        <BoxTitle
          className="text-sm text-center md:px-8"
          pergunta="Lembre-se de que sua nova senha precisa ser diferente daquela estabelecida anteriormente."
        />

        <form
          action=""
          method="post"
          id="esqueci-senha-form"
          className="flex flex-col gap-y-1"
        >
          <div className="relative barra-horizontal mt-4 md:px-8">
            <InputLogin
              seletor="email-esqueci-senha"
              placeholder="Nova Senha"
              type="password"
            />
          </div>
          <div className="relative barra-horizontal mt-4 stepThreeAfter md:px-8">
            <InputLogin
              seletor="email-esqueci-senha-confirm"
              placeholder="Confirme sua nova senha"
              type="password"
            />
          </div>
        </form>
      </WhiteBoxEsqueci>

      <ButtonLogin
        functionButton={global.nextStep}
        texto="Salvar"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </section>
  );
}
