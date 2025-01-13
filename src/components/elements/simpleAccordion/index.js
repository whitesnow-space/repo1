import React from "react";
import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap";

const SimpleAccordion = ({ data }) => {
  return (
    <div className="simpleAccordion">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="darkpurple fw-bold py-2">{data.title}</span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="darkpurple">{data.description}</span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

SimpleAccordion.propTypes = {
  data: PropTypes.object,
};

export default SimpleAccordion;
