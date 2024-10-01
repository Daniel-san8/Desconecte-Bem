import Sectionleft from "./components/LoginHome/SectionLeft";
import SectionRight from "./components/LoginHome/SectionRight";

export default function App() {
  return (
    <div className=" h-screen font-Beiruti md:grid md:grid-cols-2 md:items-center">
      <Sectionleft />
      <SectionRight />
    </div>
  );
}
