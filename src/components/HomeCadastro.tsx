import BoxTitle from "./LoginHome/BoxTitle";
import ButtonLogin from "./LoginHome/ButtonLogin";
import InputLogin from "./LoginHome/InputLogin";
import Sectionleft from "./LoginHome/SectionLeft";
import WhiteBox from "./LoginHome/WhiteBox";

export default function HomeCadastro() {
  return (
    <div className="h-full bg-sectionRight font-Beiruti md:grid md:grid-cols-2 md:items-center">
      <Sectionleft />
      <WhiteBox>
        <BoxTitle
          titulo="Cadastro"
          pergunta="Por favor, insira seus dados abaixo."
        />
        <div className="relative barra-horizontal">
          <InputLogin type="email" seletor="email" placeholder="E-mail" />
        </div>
        <div className="relative barra-horizontal">
          <InputLogin type="Senha" seletor="Senha" placeholder="Senha" />
        </div>
        <div className="relative barra-horizontal">
          <InputLogin
            type="confirm"
            seletor="confirm"
            placeholder="Confirmar Senha"
          />
        </div>
      </WhiteBox>

      <ButtonLogin texto="Cadastrar-se" />
    </div>
  );
}
