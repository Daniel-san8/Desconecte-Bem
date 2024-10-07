import React, { PropsWithChildren } from "react";

interface IGlobalProvider {
  dispatchStep: React.Dispatch<Action>;
  step: TypeEstadoEsqueciSenha;
  nextStep: () => void;
  resetStep: () => void;
}

type Action = { type: "next" } | { type: "previous" };

type TypeEstadoEsqueciSenha = {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
  stepFour: boolean;
};

export const global = React.createContext<IGlobalProvider | null>(null);

export const useGlobal = () => {
  const contexto = React.useContext(global);

  if (contexto === null) throw new Error("Contexto nulo");

  return contexto;
};

export function GlobalProvider({ children }: PropsWithChildren) {
  const stepObj: TypeEstadoEsqueciSenha = {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  };

  const [step, dispatchStep] = React.useReducer<
    React.Reducer<TypeEstadoEsqueciSenha, Action>
  >(advanceSteps, stepObj);

  function advanceSteps(
    state: TypeEstadoEsqueciSenha,
    action: Action
  ): TypeEstadoEsqueciSenha {
    switch (action.type) {
      case "next":
        if (state.stepOne) {
          return {
            stepOne: false,
            stepTwo: true,
            stepThree: false,
            stepFour: false,
          };
        }

        if (state.stepTwo) {
          return {
            stepOne: false,
            stepTwo: false,
            stepThree: true,
            stepFour: false,
          };
        }
        if (state.stepThree) {
          return {
            stepOne: false,
            stepTwo: false,
            stepThree: false,
            stepFour: true,
          };
        }
        return stepObj;
      case "previous":
        if (state.stepFour) {
          return {
            stepOne: false,
            stepTwo: false,
            stepThree: true,
            stepFour: false,
          };
        }
        if (state.stepThree) {
          return {
            stepOne: false,
            stepTwo: true,
            stepThree: false,
            stepFour: false,
          };
        }
        if (state.stepTwo) {
          return {
            stepOne: true,
            stepTwo: false,
            stepThree: false,
            stepFour: false,
          };
        }
        return state;
      default:
        return stepObj;
    }
  }

  const nextStep = () => {
    dispatchStep({ type: "next" });
  };

  const resetStep = () => {
    dispatchStep({ type: "previous" });
  };

  return (
    <global.Provider value={{ step, nextStep, resetStep, dispatchStep }}>
      {children}
    </global.Provider>
  );
}
