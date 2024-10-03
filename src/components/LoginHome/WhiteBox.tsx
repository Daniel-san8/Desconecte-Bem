import { PropsWithChildren } from "react";

type WhiteBoxProps = PropsWithChildren & {
  espacamento: string;
};

export default function WhiteBox({ children, espacamento }: WhiteBoxProps) {
  return (
    <div
      className={`
    p-5 ${espacamento} bg-white rounded-3xl w-72 h-72 flex z-30 flex-col md:w-80 md:h-96 md:p-0 md:mt-6 lg:w-96`}
    >
      {children}
    </div>
  );
}
