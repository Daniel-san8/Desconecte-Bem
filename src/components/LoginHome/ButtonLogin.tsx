type ButtonLoginProps = {
  texto: string;
  idForm?: string;
  className: string;
  functionButton?: () => void;
};

export default function ButtonLogin({
  texto,
  idForm,
  className,
  functionButton,
}: ButtonLoginProps) {
  return (
    <div
      className="my-7 hover:opacity-70 transition duration-300 ease-in-out md:mt-14"
      onClick={functionButton}
    >
      <button type="submit" form={idForm} className={className}>
        {texto}
      </button>
    </div>
  );
}
