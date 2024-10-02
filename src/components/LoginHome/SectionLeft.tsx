export default function Sectionleft() {
  return (
    <section className="hidden bg-sectionLeft h-full md:flex md:flex-col ">
      <div className="md:px-16 md:pt-20 lg:pt-40">
        <h1 className="font-semibold text-white md:text-5xl ">
          Bem vindo(a) ao Desconecte Bem!
        </h1>
      </div>

      <p className="text-white text-base md:font-normal md:px-16 md:mt-1 md:mr-0 lg:mr-40">
        Lhe acompanhando na jornada rumo a uma vida mais balanceada.
      </p>

      <div className="h-screen md:flex md:w-full">
        <img
          src="/assets/imageSectionLeft.png"
          alt="image-section"
          className="md:w-3/4 md:h-3/4 md:self-end lg:w-3/4"
          draggable="false"
        />

        <img
          src="/assets/logoLight.png"
          alt="logo"
          className=" md:h-36 md:self-end md:pb-8 lg:h-44"
          draggable="false"
        />
      </div>
    </section>
  );
}
