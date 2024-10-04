import React from "react";

export default function EsqueciSenha() {
  React.useEffect(() => {
    document.title = "Esqueci a Senha | Desconecte Bem";
  }, []);

  return <h1>Esqueci a senha</h1>;
}
