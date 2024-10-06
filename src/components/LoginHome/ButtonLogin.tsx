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
    <div className="py-7 md:pt-14" onClick={functionButton}>
      <button type="submit" form={idForm} className={className}>
        {texto}
      </button>
    </div>
  );
}
