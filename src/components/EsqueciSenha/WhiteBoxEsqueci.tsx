import React, { PropsWithChildren } from "react";

type PropWhiteBoxEsqueci = PropsWithChildren & {
  size?: "small" | "medium" | "large";
};

export default function WhiteBoxEsqueci({
  children,
  size,
}: PropWhiteBoxEsqueci) {
  const [tamanho, setTamanho] = React.useState("h-64");
  React.useEffect(() => {
    switch (size) {
      case "small":
        setTamanho("h-56");
        break;
      case "medium":
        setTamanho("h-60");
        break;
    }
  }, []);
  return (
    <div
      className={`
      p-5 mt-28 bg-white rounded-3xl w-72 ${tamanho} flex z-30 flex-col md:w-80 md:h-60 md:p-0 md:mt-6 lg:w-96`}
    >
      {children}
    </div>
  );
}
