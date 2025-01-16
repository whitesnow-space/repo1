import React from "react";

import CustomAccordion from "../../elements/customAccordion";

const AccordionPanel = ({
  tireData,
  tireAdditionalData,
  careData,
  careAdditionalData,
}) => {
  return (
    <div className="accordionPanel">
      <div className="row">
        <div className="col-xl-6">
          <h5 className="darkpurple mt-3">Tire changes and tire hotels</h5>
          {tireData.map((item, index) => {
            return (
              <div className="my-3" key={index}>
                <CustomAccordion
                  title={item.title}
                  type="tire"
                  price={item.price}
                />
              </div>
            );
          })}
          <CustomAccordion
            title="Additional Services"
            type="star"
            isAdditional={true}
            list={tireAdditionalData}
          />
        </div>
        <div className="col-xl-6">
          <h5 className="darkpurple mt-3">Car Care</h5>
          {careData.map((item, index) => {
            return (
              <div className="my-3" key={index}>
                <CustomAccordion
                  title={item.title}
                  type="care"
                  price={item.price}
                />
              </div>
            );
          })}
          <CustomAccordion
            title="Additional Services"
            type="star"
            isAdditional={true}
            list={careAdditionalData}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionPanel;
