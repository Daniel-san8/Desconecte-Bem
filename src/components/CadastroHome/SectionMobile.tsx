export default function SectionMobile() {
  return (
    <div className="w-80 self-start pb-4 absolute top-0 md:hidden">
      <img src="/assets/formaMobile.png" alt="forma" className="relative" />
      <div className="z-10 absolute top-0 pl-6 pt-3">
        <h1 className="text-white font-semibold text-2xl">
          Bem-vindo(a) ao <br /> Desconecte Bem!
        </h1>
        <p className="text-white font-light">
          Lhe acompanhando na <br /> jornada rumo a uma vida <br /> mais
          balanceada.
        </p>
      </div>
    </div>
  );
}
