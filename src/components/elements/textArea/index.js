import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../button";
import { ICONS } from "../../../consts";
import "./styles.scss";

const TextArea = ({ type, title, price, description }) => {
  return (
    <div className="textArea">
      <div className="textArea-header row justify-content-between">
        <div className="d-flex col-12 col-sm-5 px-0">
          <img src={ICONS[type]} alt="textArea-img" />
          <div className="d-flex flex-column p-2">
            <span className="textArea-title">{title}</span>
            <span>From {price},-</span>
          </div>
        </div>
        <div className="col-12 col-sm-7 px-0 my-auto">
          <Link className="customAccordion-careList-link">
            <Button
              color="white"
              withIcon={true}
              placeholder={`Read more about ${title.toLowerCase()}`}
            />
          </Link>
        </div>
      </div>
      <div className="textArea-body mt-3 px-2">
        <span>{description}</span>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  type: PropTypes.oneOf(["tire", "care", "star"]),
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default TextArea;
