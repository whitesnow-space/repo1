import React from "react";
import { Link } from "react-router-dom";

import Button from "../../button";

const CustomAccordionCareList = ({ placeholder }) => {
  return (
    <div className="customAccordion-careList">
      <div className="row justify-content-between">
        <div className="col-4 col-sm-6">Service</div>
        <div className="col-4 col-sm-3">Small/Medium</div>
        <div className="col-4 col-sm-3 text-end">Large/SUV</div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto my-5">
          <Link className="customAccordion-careList-link">
            <Button
              color="white"
              withIcon={true}
              placeholder={"Read more about what is included in " + placeholder}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordionCareList;
