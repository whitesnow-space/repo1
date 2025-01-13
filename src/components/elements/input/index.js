import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Input = ({ placeholder }) => {
  return (
    <input className="input w-100" type="text" placeholder={placeholder} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
