import { useForm } from "react-hook-form";
import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBoxEsqueci from "./WhiteBoxEsqueci";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function StepThree() {
  const global = useGlobal();

  const schemaStepThree = z.object({
    stepThree: z.string(),
  });

  type TSchemaStepThree = z.infer<typeof schemaStepThree>;

  const { handleSubmit, register } = useForm<TSchemaStepThree>({
    resolver: zodResolver(schemaStepThree),
  });

  return (
    <section className="w-full  flex flex-col items-center">
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>
      <WhiteBoxEsqueci>
        <div>
          <h1 className="text-3xl text-center font-semibold md:text-4xl md:mt-4">
            Crie uma Nova Senha
          </h1>
        </div>
        <BoxTitle
          className="text-base text-center md:px-8"
          pergunta="Lembre-se de que sua nova senha precisa ser diferente daquela estabelecida anteriormente."
        />

        <form
          action=""
          method="post"
          id="form-step-three"
          className="flex flex-col"
        >
          <div className="relative barra-horizontal mt-4 stepThreeAfterNone md:px-8 md:mt-2">
            <InputLogin placeholder="Nova Senha" type="password" />
          </div>
          <div className="relative barra-horizontal mt-4 stepThreeAfter md:px-8">
            <InputLogin placeholder="Confirme sua nova senha" type="password" />
          </div>
        </form>
      </WhiteBoxEsqueci>

      <ButtonLogin
        texto="Salvar"
        idForm="form-step-three"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </section>
  );
}
