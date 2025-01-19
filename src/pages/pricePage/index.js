import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/elements/button";
import AccordionPanel from "../../components/custom/accordionPanel";
import AddressSearchPanel from "../../components/custom/addressSearchPanel";
import staticData from "../../consts/staticData";

const PricePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pricePage">
      <div className="custom-container">
        <div className="pricePage-panel">
          <p className="title darkpurple px-2">Prices</p>
          <div className="my-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5">
                <Link className="link">
                  <Button
                    placeholder="Learn more about what is included in the different services"
                    color="darkpurple"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <AccordionPanel
              tireData={staticData.tireData}
              tireAdditionalData={staticData.tireAdditionalData}
              careData={staticData.careData}
              careAdditionalData={staticData.careAdditionalData}
            />
          </div>
        </div>
        <AddressSearchPanel />
      </div>
    </div>
  );
};

export default PricePage;
