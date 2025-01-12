import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../button";
import { ICONS } from "../../../consts";
import "./styles.scss";

const TextPanel = ({ type, title, price, description }) => {
  return (
    <div className="textPanel">
      <div className="textPanel-header row">
        <div className="d-flex col-12 col-sm-6">
          <img src={ICONS[type]} alt="textPanel-img" />
          <div className="d-flex flex-column p-2">
            <span className="textPanel-title">{title}</span>
            <span>From {price},-</span>
          </div>
        </div>
        <div className="col-12 col-sm-6 px-3 my-auto">
          <Link className="customAccordion-careList-link">
            <Button
              color="white"
              withIcon={true}
              placeholder="go to next page"
            />
          </Link>
        </div>
      </div>
      <div className="textPanel-body">
        <span>{description}</span>
      </div>
    </div>
  );
};

TextPanel.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default TextPanel;
