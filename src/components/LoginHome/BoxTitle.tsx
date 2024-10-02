import { Link } from "react-router-dom";

type BoxTitleProps = {
  titulo: string;
  extra?: string;
  pergunta: string;
};

export default function BoxTitle({ titulo, extra, pergunta }: BoxTitleProps) {
  return (
    <div className="pb-7 md:pb-0 flex flex-col items-center md:items-start">
      <h1 className="text-4xl text-center font-semibold md:text-5xl md:text-start">
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
