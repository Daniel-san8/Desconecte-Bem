import React, { PropsWithChildren } from "react";

type TypeEstadoEsqueciSenha = {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
  stepFour: boolean;
};

interface IGlobalProvider {
  estadoEsqueciSenha: TypeEstadoEsqueciSenha;
  setEstadoEsqueciSenha: React.Dispatch<
    React.SetStateAction<TypeEstadoEsqueciSenha>
  >;
  advanceSteps: () => void;
}

export const global = React.createContext<IGlobalProvider | null>(null);

export const useGlobal = () => {
  const contexto = React.useContext(global);

  if (contexto === null) throw new Error("Contexto nulo");

  return contexto;
};

export function GlobalProvider({ children }: PropsWithChildren) {
  const [estadoEsqueciSenha, setEstadoEsqueciSenha] =
    React.useState<TypeEstadoEsqueciSenha>({
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      stepFour: false,
    });

  function advanceSteps() {}

  return (
    <global.Provider
      value={{ estadoEsqueciSenha, setEstadoEsqueciSenha, advanceSteps }}
    >
      {children}
    </global.Provider>
  );
}
