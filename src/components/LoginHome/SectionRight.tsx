import ButtonLogin from "./ButtonLogin";
import InputLogin from "./InputLogin";
import BoxTitle from "./BoxTitle";
import WhiteBox from "./WhiteBox";

export default function SectionRight() {
  return (
    <section className="h-screen bg-sectionRight flex flex-col justify-center items-center md:h-full ">
      <WhiteBox>
        <div className="md:flex md:items-center">
          <img
            src="/assets/logoDark.png"
            alt="logo-entrar"
            width="138px"
            className="hidden md:block"
          />

          <BoxTitle
            className="pb-7 md:pb-0 flex flex-col items-center md:items-start"
            titulo="Entrar"
            pergunta="Não tem uma conta?"
            extra="Cadastrar-se"
          />
        </div>

        <form
          className="flex flex-col gap-y-8 md:pt-10 md:px-9 md:gap-y-16"
          id="form-email"
          method="post"
        >
          <div className="relative barra-horizontal">
            <InputLogin seletor="email" type="email" placeholder="E-mail" />
          </div>
          <div className="relative barra-horizontal ">
            <InputLogin type="password" seletor="senha" placeholder="Senha" />
          </div>
        </form>
        <a
          href=""
          className="self-center underline pt-7 md:self-center md:pt-10"
        >
          Esqueci minha senha
        </a>
      </WhiteBox>
      <ButtonLogin texto="Entrar" idForm="form-email" />
    </section>
  );
}
