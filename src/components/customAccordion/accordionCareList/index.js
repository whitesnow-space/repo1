import React from "react";
import { Link } from "react-router-dom";

import Button from "../../button";

const CustomAccordionCareList = () => {
  return (
    <div className="customAccordion-careList">
      <div className="row justify-content-between">
        <div className="col-4 col-sm-6">Service</div>
        <div className="col-4 col-sm-3">Small/Medium</div>
        <div className="col-4 col-sm-3 text-end">Large/SUV</div>
      </div>
      <div className="w-50 mx-auto my-5">
        <Link className="customAccordion-careList-link">
          <Button color="white" withIcon={true} placeholder="go to next page" />
        </Link>
      </div>
    </div>
  );
};

export default CustomAccordionCareList;
