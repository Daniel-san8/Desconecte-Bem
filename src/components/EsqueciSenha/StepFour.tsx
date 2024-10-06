import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBox from "../LoginHome/WhiteBox";

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
      <WhiteBox espacamento="mt-28">
        <BoxTitle
          titulo="Senha alterada com sucesso!"
          pergunta="Conseguimos vincular a nova senha à sua conta. Agora, você pode entrar com ela normalmente."
        />
        <div className="self-end ">
          <img src="/assets/confirmarSenha.png" alt="senha confirmada" />
        </div>
      </WhiteBox>

      <ButtonLogin
        functionButton={backLogin}
        texto="Entrar na conta"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </>
  );
}
