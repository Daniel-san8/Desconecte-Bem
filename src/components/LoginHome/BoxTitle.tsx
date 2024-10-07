import { Link } from "react-router-dom";

type BoxTitleProps = HTMLDivElement & {
  titulo?: string;
  extra?: string;
  pergunta: string;
};

export default function BoxTitle({
  titulo,
  extra,
  pergunta,
  className,
}: Partial<BoxTitleProps>) {
  return (
    <div className={className}>
      <h1 className="text-4xl text-center font-semibold md:text-6xl md:text-start">
        {titulo}
      </h1>
      <p>
        {pergunta}{" "}
        <Link to="/cadastro" className="text-cadastrar cursor-pointer">
          {extra}
        </Link>
      </p>
    </div>
  );
}
