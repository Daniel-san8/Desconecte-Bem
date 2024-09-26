import React from "react";
import Sectionleft from "./components/LoginHome/SectionLeft";
import SectionRight from "./components/LoginHome/SectionRight";

export default function App() {
  return (
    <div className="h-screen lg:grid lg:grid-cols-2 lg:items-center">
      <Sectionleft />
      <SectionRight />
    </div>
  );
}
