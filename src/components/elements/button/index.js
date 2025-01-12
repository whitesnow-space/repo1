import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./styles.scss";

const Button = ({ color, placeholder, withIcon = false }) => {
  return (
    <>
      <button className={cx("button", `button-${color}`)} type="button">
        <div className="d-flex">
          <span className="button-placeholder">{placeholder}</span>
          {withIcon && <i className="button-icon bi bi-arrow-right"></i>}
        </div>
      </button>
    </>
  );
};

Button.propTypes = {
  placeholder: PropTypes.string,
  color: PropTypes.oneOf(["darkpurple", "white"]),
  withIcon: PropTypes.bool,
};

export default Button;
