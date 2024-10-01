type ButtonLoginProps = {
  texto: string;
};

export default function ButtonLogin({ texto }: ButtonLoginProps) {
  return (
    <div className="py-7 md:pt-14">
      <button
        type="submit"
        id="form-email"
        className="text-white font-semibold bg-botaoLogin text-3xl px-12 py-2 md:text-4xl md:py-4 md:px-20 rounded-l-full rounded-br-full boxShadowButton"
      >
        {texto}
      </button>
    </div>
  );
}
