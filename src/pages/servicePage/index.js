import React from "react";

import Footer from "../../components/custom/footer";
import TextPanel from "../../components/custom/textPanel";
import staticData from "../../consts/staticData";

const ServicePage = () => {
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
      <Footer />
    </div>
  );
};

export default ServicePage;
