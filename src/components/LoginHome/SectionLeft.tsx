export default function Sectionleft() {
  return (
    <section className="bg-sectionLeft lg:h-full lg:flex lg:flex-col ">
      <div className="lg:px-16 lg:pt-40 lg:flex-1">
        <h1 className="font-semibold text-white lg:text-5xl ">
          Bem vindo(a) ao Desconecte Bem!
        </h1>
      </div>

      <p className="text-white text-base lg:font-normal lg:px-16 lg:mt-1 lg:mr-40">
        Lhe acompanhando na jornada rumo a uma vida mais balanceada.
      </p>

      <div className="lg:flex lg:w-full ">
        <img
          src="/assets/imageSectionLeft.png"
          alt="image-section"
          className="lg:w-3/4 lg:h-3/4 lg:self-end"
        />

        <img
          src="/assets/logoLight.png"
          alt="logo"
          className=" lg:h-44 lg:self-end lg:pb-8"
        />
      </div>
    </section>
  );
}
