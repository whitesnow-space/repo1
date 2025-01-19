import React, { useEffect } from "react";

import TextPanel from "../../components/custom/textPanel";
import staticData from "../../consts/staticData";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="servicePage">
      <div className="custom-container">
        <div className="serverPage-panel">
          <div className="px-3">
            <p className="title darkpurple">Our Services</p>
            <p className="darkpurple mt-2 mb-5">
              Not sure what services you need? Here is a small overview with a
              description of what our different options contain
            </p>
          </div>
          <TextPanel
            tireData={staticData.tireData}
            tireAdditionalData={staticData.tireAdditionalData}
            careData={staticData.careData}
            careAdditionalData={staticData.careAdditionalData}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
