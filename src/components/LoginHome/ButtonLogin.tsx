type ButtonLoginProps = {
  texto: string;
  idForm?: string;
  className: string;
};

export default function ButtonLogin({
  texto,
  idForm,
  className,
}: ButtonLoginProps) {
  return (
    <div className="py-7 md:pt-14">
      <button type="submit" form={idForm} className={className}>
        {texto}
      </button>
    </div>
  );
}
