import React from "react";

const Button = ({ label, onClick, variant = "primary" }) => {
  return (
    <button className="px-4 py-2 bg-blue-500 rounded text-white" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
