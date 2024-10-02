import Sectionleft from "./LoginHome/SectionLeft";
import SectionRight from "./LoginHome/SectionRight";

export default function HomeLogin() {
  return (
    <div className="h-screen font-Beiruti md:grid md:grid-cols-2 md:items-center">
      <Sectionleft />
      <SectionRight />
    </div>
  );
}
