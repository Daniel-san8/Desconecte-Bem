import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";

export default function StepFour() {
  const navigate = useNavigate();

  const global = useGlobal();

  function backLogin() {
    global.nextStep();
    navigate("/");
  }

  return (
    <>
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>

      <div
        className="
      p-5 mt-28 bg-white rounded-3xl w-72 h-52 flex z-30 flex-col md:w-80 md:h-96 md:p-0 md:mt-6 lg:w-96"
      >
        <div className="flex items-center">
          <h1 className="text-2xl text-center font-semibold my-4 md:text-4xl md:text-start">
            Senha alterada com sucesso!
          </h1>
          <div>
            <img src="/assets/confirmarSenha.png" alt="senha confirmada" />
          </div>
        </div>
        <BoxTitle
          className="text-sm text-center mb-2"
          pergunta="Conseguimos vincular a nova senha à sua conta. Agora, você pode entrar com ela normalmente."
        />
      </div>
      <ButtonLogin
        functionButton={backLogin}
        texto="Entrar na conta"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </>
  );
}
