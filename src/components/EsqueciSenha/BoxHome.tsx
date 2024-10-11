import React from "react";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import { useGlobal } from "../../globalStates/globalUse";
import WhiteBoxEsqueci from "./WhiteBoxEsqueci";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function BoxHome() {
  const global = useGlobal();
  const schemaStepOne = z.object({
    stepOneEmail: z.string().email("Digite um email válido"),
  });
  type TSchemaStepOne = z.infer<typeof schemaStepOne>;

  const { handleSubmit, register } = useForm<TSchemaStepOne>({
    resolver: zodResolver(schemaStepOne),
  });

  return (
    <section className="w-full  flex flex-col items-center">
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>

      <WhiteBoxEsqueci size="small">
        <div>
          <h1 className="text-3xl text-center font-semibold md:text-4xl md:mt-4">
            Esqueci minha senha
          </h1>
        </div>
        <BoxTitle
          className="text-base text-center my-3 md:px-8"
          pergunta="Por favor, insira abaixo o e-mail com o qual vinculou sua conta para que possamos ajudá-lo(a) a recuperá-la."
        />

        <form
          action=""
          method="post"
          id="form-step-one"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="relative barra-horizontal stepOneAfter md:px-8">
            <InputLogin
              placeholder="E-mail"
              type="email"
              {...register("stepOneEmail")}
            />
          </div>
        </form>
      </WhiteBoxEsqueci>

      <ButtonLogin
        texto="Confirmar"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
        idForm="form-step-one"
        functionButton={global.nextStep}
      />
    </section>
  );
}
