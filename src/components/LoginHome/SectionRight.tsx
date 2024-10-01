export default function SectionRight() {
  return (
    <section className="h-screen bg-sectionRight flex flex-col justify-center items-center md:h-full ">
      <div className="p-6 bg-white rounded-3xl w-72 h-72 flex flex-col md:w-80 md:h-96 md:p-0 lg:w-96 ">
        <div className="md:flex md:items-center">
          <img
            src="/assets/logoDark.png"
            alt="logo-entrar"
            width="138px"
            className="hidden md:block"
          />

          <div className="pb-7 md:pb-0 flex flex-col items-center md:items-start">
            <h1 className="text-4xl text-center font-semibold md:text-5xl md:text-start">
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
          className="flex flex-col gap-y-8 md:pt-10 md:px-9 md:gap-y-16"
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
          className="self-center underline pt-7 md:self-center md:pt-10"
        >
          Esqueci minha senha
        </a>
      </div>
      <div className="py-7 md:pt-14">
        <button
          type="submit"
          id="form-email"
          className="text-white font-semibold bg-botaoLogin text-3xl px-12 py-2 md:text-4xl md:py-4 md:px-20 rounded-l-full rounded-br-full boxShadowButton"
        >
          Entrar
        </button>
      </div>
    </section>
  );
}
