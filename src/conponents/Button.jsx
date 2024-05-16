import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColort = "text-white",
  className = " ",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColort} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
