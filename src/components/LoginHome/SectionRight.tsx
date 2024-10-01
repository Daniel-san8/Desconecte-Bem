export default function SectionRight() {
  return (
    <section className="h-screen bg-sectionRight flex flex-col justify-center items-center lg:h-full ">
      <div className="p-6 bg-white rounded-3xl flex flex-col lg:w-96 lg:h-96">
        <div className="lg:flex lg:items-center">
          <img
            src="/assets/logoDark.png"
            alt="logo-entrar"
            width="138px"
            className="hidden md:block"
          />

          <div className="pb-7 lg:pb-0 lg:flex lg:flex-col">
            <h1 className="text-4xl text-center font-semibold lg:text-5xl lg:text-start">
              Entrar
            </h1>
            <p>
              Não tem uma conta?{" "}
              <span className="text-cadastrar cursor-pointer">
                Cadastrar-se.
              </span>
            </p>
          </div>
        </div>

        <form
          className="flex flex-col gap-y-8 lg:pt-10 lg:px-9 lg:gap-y-16"
          id="form-email"
        >
          <div className="relative barra-horizontal">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="outline-none md:placeholderMax w-full"
            />
          </div>
          <div className="relative barra-horizontal ">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              className="outline-none md:placeholderMax w-full"
            />
          </div>
        </form>
        <a
          href=""
          className="self-center underline pt-7 lg:self-center lg:pt-10"
        >
          Esqueci minha senha
        </a>
      </div>
      <div className="pt-7 lg:pt-14">
        <button
          type="submit"
          id="form-email"
          className="text-white font-semibold bg-botaoLogin text-3xl px-12 py-2 lg:text-4xl lg:py-4 lg:px-20 rounded-l-full rounded-br-full boxShadowButton"
        >
          Entrar
        </button>
      </div>
    </section>
  );
}
