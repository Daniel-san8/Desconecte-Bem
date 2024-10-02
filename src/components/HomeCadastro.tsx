import BoxTitle from "./LoginHome/BoxTitle";
import ButtonLogin from "./LoginHome/ButtonLogin";
import InputLogin from "./LoginHome/InputLogin";
import Sectionleft from "./LoginHome/SectionLeft";
import WhiteBox from "./LoginHome/WhiteBox";

export default function HomeCadastro() {
  return (
    <div className="h-full bg-sectionRight font-Beiruti md:grid md:grid-cols-2 md:items-center">
      <Sectionleft />

      <div className="h-screen bg-sectionRight flex flex-col justify-center items-center md:h-full">
        <WhiteBox>
          <BoxTitle
            className="pb-7 flex flex-col items-center md:items-center md:py-10"
            titulo="Cadastro"
            pergunta="Por favor, insira seus dados abaixo."
          />
          <form
            action=""
            className="flex flex-col gap-y-8 md:px-9"
            id="cadastroForm"
            method="post"
          >
            <div className="relative barra-horizontal afterEmail">
              <InputLogin type="email" seletor="email" placeholder="E-mail" />
            </div>
            <div className="relative barra-horizontal">
              <InputLogin type="Senha" seletor="Senha" placeholder="Senha" />
            </div>
            <div className="relative barra-horizontal afterConfirmarSenha">
              <InputLogin
                type="confirm"
                seletor="confirm"
                placeholder="Confirmar Senha"
              />
            </div>
          </form>
        </WhiteBox>

        <ButtonLogin texto="Cadastrar-se" idForm="cadastroForm" />
      </div>
    </div>
  );
}
