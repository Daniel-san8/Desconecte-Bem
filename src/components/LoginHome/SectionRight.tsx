export default function SectionRight() {
  return (
    <section className="bg-sectionRight lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="bg-white lg:w-96 lg:h-96 lg:rounded-3xl lg:flex lg:flex-col">
        <div className="lg:flex lg:items-center">
          <img src="/assets/logoDark.png" alt="logo-entrar" width="138px" />

          <div className="lg:flex lg:flex-col">
            <h1 className="lg:text-5xl lg:font-semibold">Entrar</h1>
            <p>
              Não tem uma conta?{" "}
              <span className="text-cadastrar cursor-pointer">
                Cadastrar-se.
              </span>
            </p>
          </div>
        </div>

        <form className="lg:flex lg:flex-col lg:pt-10 lg:px-9 lg:gap-y-16">
          <div className="relative barra-horizontal">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="outline-none placeholderMax"
            />
          </div>
          <div className="relative barra-horizontal">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              className="outline-none placeholderMax"
            />
          </div>
        </form>
        <a href="#" className="underline lg:self-center lg:pt-10">
          Esqueci minha senha
        </a>
      </div>
    </section>
  );
}
