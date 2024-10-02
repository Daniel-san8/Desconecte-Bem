import React from "react";

type InputLoginProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  seletor: string;
  placeholder: string;
};

export default function InputLogin({
  type,
  seletor,
  placeholder,
  ...props
}: InputLoginProps) {
  return (
    <input
      type={type}
      name={seletor}
      id={seletor}
      placeholder={placeholder}
      className="outline-none md:placeholderMax w-full"
      {...props}
    />
  );
}
