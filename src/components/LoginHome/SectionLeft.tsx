export default function Sectionleft() {
  return (
    <section className="bg-sectionLeft lg:h-full lg:flex lg:flex-col ">
      <div className="lg:px-28 lg:pt-40 flex-1">
        <h1 className="font-semibold text-white lg:text-4xl lg:leading-normal">
          Bem vindo(a) ao Desconecte Bem!
        </h1>

        <p className="text-white text-base lg:font-normal lg:pr-16">
          Lhe acompanhando na jornada rumo a uma vida mais balanceada.
        </p>
      </div>

      <div className="lg:self-end lg:justify-end lg:w-36">
        <img src="/assets/logoLight.png" alt="logo" />
      </div>
    </section>
  );
}
