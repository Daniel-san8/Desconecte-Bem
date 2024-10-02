import { PropsWithChildren } from "react";

export default function WhiteBox({ children }: PropsWithChildren) {
  return (
    <div className="p-6 mt-8 bg-white rounded-3xl w-72 h-72 flex flex-col md:w-80 md:h-96 md:p-0 md:mt-6 lg:w-96">
      {children}
    </div>
  );
}
