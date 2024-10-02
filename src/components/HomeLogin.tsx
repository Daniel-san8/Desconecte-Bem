import React from "react";
import Sectionleft from "./LoginHome/SectionLeft";
import SectionRight from "./LoginHome/SectionRight";

export default function HomeLogin() {
  React.useEffect(() => {
    document.title = "Login | Desconecte Bem";
  }, []);
  return (
    <div className="h-screen font-Beiruti md:grid md:grid-cols-2 md:items-center">
      <Sectionleft />
      <SectionRight />
    </div>
  );
}
