import ButtonLogin from "./ButtonLogin";
import InputLogin from "./InputLogin";
import BoxTitle from "./BoxTitle";
import WhiteBox from "./WhiteBox";
import SectionMobile from "../CadastroHome/SectionMobile";
import SectionInferiorMobile from "../CadastroHome/SectionInferiorMobile";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SectionRight() {
  const schemaName = z.object({
    name: z.string().email("Por favor, insira um e-mail válido"),
    password: z.string().min(1, "A senha é obrigatória"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormName>({
    resolver: zodResolver(schemaName),
  });

  type TFormName = z.infer<typeof schemaName>;

  function mostrarDados(data: TFormName) {
    console.log(data);
  }

  return (
    <section className="h-screen flex flex-col justify-center items-center md:h-full">
      <div className="bg-retangulo absolute top-1 w-full h-24 mt-8 md:hidden"></div>

      <SectionMobile />

      <WhiteBox espacamento="mt-80">
        <div className="md:flex md:items-center">
          <img
            src="/assets/logoDark.png"
            alt="logo-entrar"
            width="138px"
            className="hidden md:block"
            draggable="false"
          />

          <BoxTitle
            className="pb-7 md:pb-0 flex flex-col items-center md:items-start"
            titulo="Entrar"
            pergunta="Não tem uma conta?"
            extra="Cadastrar-se"
          />
        </div>

        <form
          className="flex flex-col gap-y-8 md:pt-10 md:px-9 md:gap-y-16"
          id="form-email"
          method="post"
          onSubmit={handleSubmit(mostrarDados)}
        >
          <div className="relative barra-horizontal">
            <InputLogin
              type="email"
              placeholder="E-mail"
              autoComplete="email"
              {...register("name")}
            />
          </div>
          <div className="relative barra-horizontal ">
            <InputLogin
              type="password"
              placeholder="Senha"
              autoComplete="current-password"
              {...register("password")}
            />
          </div>
        </form>
        <Link
          to="esqueci-senha"
          className="self-center underline pt-7 md:self-center md:pt-10"
        >
          Esqueci minha senha
        </Link>
      </WhiteBox>
      <ButtonLogin
        className="text-white font-semibold bg-botaoLogin text-3xl px-12 py-2 md:text-4xl md:py-4 md:px-20 rounded-l-full rounded-br-full boxShadowButton"
        texto="Entrar"
        idForm="form-email"
      />

      <SectionInferiorMobile />
    </section>
  );
}
