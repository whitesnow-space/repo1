import React from "react";

import "./styles.scss";

const Input = ({ placeholder }) => {
  return (
    <input className="input w-100" type="text" placeholder={placeholder} />
  );
};

export default Input;
