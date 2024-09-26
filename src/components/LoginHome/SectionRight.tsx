export default function SectionRight() {
  return (
    <section className="bg-sectionRight lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="bg-white lg:w-96 lg:h-96 lg:rounded-3xl">
        <div className="lg:flex lg:items-center">
          <img src="/assets/logoDark.png" alt="logo-entrar" width="138px" />

          <div className="lg:flex lg:flex-col">
            <h1>Entrar</h1>
            <p>
              Não tem uma conta?{" "}
              <span className="text-cadastrar cursor-pointer">
                Cadastrar-se.
              </span>
            </p>
          </div>
        </div>

        <form className="lg:flex lg:flex-col lg:pt-10 lg:px-9 lg:gap-y-5">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="outline-none"
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            className="outline-none"
          />

          <a href="#" className="underline lg:self-center lg:pt-4">
            Esqueci minha senha
          </a>
        </form>
      </div>
    </section>
  );
}
