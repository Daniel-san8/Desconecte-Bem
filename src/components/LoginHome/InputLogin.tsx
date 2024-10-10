import React, { forwardRef } from "react";

type InputLoginProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  placeholder: string;
};

const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(
  ({ type, placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="outline-none md:placeholderMax w-full"
        {...props}
      />
    );
  }
);

export default InputLogin;
