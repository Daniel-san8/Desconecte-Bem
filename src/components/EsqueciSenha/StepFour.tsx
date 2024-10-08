import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import WhiteBoxEsqueci from "./WhiteBoxEsqueci";

export default function StepFour() {
  const navigate = useNavigate();

  const global = useGlobal();

  function backLogin() {
    global.nextStep();
    navigate("/");
  }

  return (
    <section className="w-full  flex flex-col items-center">
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>

      <WhiteBoxEsqueci size="small">
        <div className="flex items-center md:px-8 ">
          <h1 className="text-2xl text-center font-semibold my-4 md:text-3xl md:text-start">
            Senha alterada com sucesso!
          </h1>
          <div>
            <img src="/assets/confirmarSenha.png" alt="senha confirmada" />
          </div>
        </div>
        <BoxTitle
          className="text-sm text-center mb-6 md:px-8"
          pergunta="Conseguimos vincular a nova senha à sua conta. Agora, você pode entrar com ela normalmente."
        />
      </WhiteBoxEsqueci>
      <ButtonLogin
        functionButton={backLogin}
        texto="Entrar na conta"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </section>
  );
}
