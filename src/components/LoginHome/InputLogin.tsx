import React from "react";

type InputLoginProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  placeholder: string;
};

export default function InputLogin({
  type,
  placeholder,
  ...props
}: InputLoginProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none md:placeholderMax w-full"
      {...props}
    />
  );
}
