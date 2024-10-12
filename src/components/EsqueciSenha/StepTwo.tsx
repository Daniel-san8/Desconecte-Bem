import React from "react";
import { useGlobal } from "../../globalStates/globalUse";
import BoxTitle from "../LoginHome/BoxTitle";
import ButtonLogin from "../LoginHome/ButtonLogin";
import InputLogin from "../LoginHome/InputLogin";
import WhiteBoxEsqueci from "./WhiteBoxEsqueci";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function StepTwo() {
  const global = useGlobal();
  const [emailUserState, setEmailUserState] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    setEmailUserState("danielgdt88@hotmail.com");
  }, []);

  const schemaStepTwo = z.object({
    stepTwoCode: z.string(),
  });

  type TSchemaStepTwo = z.infer<typeof schemaStepTwo>;

  const { handleSubmit, register } = useForm<TSchemaStepTwo>({
    resolver: zodResolver(schemaStepTwo),
  });

  const emailUser = emailUserState ?? "[Inserir E-mail]";

  return (
    <section className="w-full flex flex-col items-center">
      <div className="bg-retangulo w-full h-24 mt-8 md:hidden"></div>
      <WhiteBoxEsqueci size="small">
        <div>
          <h1 className="text-3xl text-center font-semibold md:text-4xl md:mt-4">
            Verifique seu E-mail
          </h1>
        </div>
        <BoxTitle
          className="text-base text-center mt-1 md:px-8 lg:py-2"
          pergunta={`Por favor, insira abaixo o código de 4 dígitos enviado para o endereço de e-mail:  ${emailUser}.`}
        />

        <form
          action=""
          method="post"
          id="form-step-two"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="relative barra-horizontal stepTwoAfter md:px-8">
            <InputLogin
              placeholder="Código"
              type="text"
              {...register("stepTwoCode")}
            />
          </div>
        </form>

        <a
          href=""
          className="self-center underline text-sm pt-10 md:self-center md:pt-14"
        >
          Reenviar Código
        </a>
      </WhiteBoxEsqueci>

      <ButtonLogin
        texto="Confirmar"
        functionButton={global.nextStep}
        idForm="form-step-two"
        className="text-white font-semibold bg-botaoLogin text-2xl px-8 py-2 rounded-full boxShadowButton md:text-3xl lg:rounded-none lg:rounded-l-full lg:rounded-br-full lg:px-10"
      />
    </section>
  );
}
