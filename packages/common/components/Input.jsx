import React from "react";

const Input = ({ onChange, placeholder, value }) => {
  return (
    <input
      type="text"
      className="px-4 py-2 rounded  border border-slate-200"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
