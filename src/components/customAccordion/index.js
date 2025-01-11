import React from "react";
import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

import CustomAccordionPriceList from "./accordionPriceList";
import CustomAccordionCareList from "./accordionCareList";
import "./styles.scss";

const CustomAccordion = ({
  type,
  title,
  price,
  description,
  isAdditional = false,
  list,
}) => {
  const ICON = {
    tire: "assets/images/tire.svg",
    care: "assets/images/care.svg",
    star: "assets/images/star.svg",
  };

  return (
    <div className="customAccordion">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex">
              <img src={ICON[type]} alt="accordion-img" />
              <div className="d-flex flex-column justify-content-center customAccordion-title">
                <span className="customAccordion-title-text">{title}</span>
                {!isAdditional && <span>{price}-</span>}
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div>
              {!isAdditional ? (
                <CustomAccordionCareList />
              ) : (
                <CustomAccordionPriceList priceList={list} />
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

CustomAccordion.propTypes = {
  type: PropTypes.oneOf(["tire", "care", "star"]),
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  isAdditional: PropTypes.bool,
  list: PropTypes.array,
};

export default CustomAccordion;
