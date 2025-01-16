import React from "react";
import { Link } from "react-router-dom";

import Button from "../../button";

const CustomAccordionCareList = ({ placeholder }) => {
  return (
    <div className="customAccordion-careList">
      <div className="customAccrodion-careList-title">
        <div className="row">
          <div className="col-4 col-sm-7">Service</div>
          {/* <div className="col-4 col-sm-3">Small/Medium</div> */}
          {/* <div className="col-4 col-sm-3 text-end">Large/SUV</div> */}
          <div className="col-4 col-sm-3"></div>
          <div className="col-4 col-sm-2">Price</div>
        </div>
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
