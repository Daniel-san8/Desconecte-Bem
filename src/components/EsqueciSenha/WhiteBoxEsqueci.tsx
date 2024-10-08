import { PropsWithChildren } from "react";

export default function WhiteBoxEsqueci({ children }: PropsWithChildren) {
  return (
    <div
      className="
      p-5 mt-28 bg-white rounded-3xl w-72 h-52 flex z-30 flex-col md:w-80 md:h-60 md:p-0 md:mt-6 lg:w-96"
    >
      {children}
    </div>
  );
}
