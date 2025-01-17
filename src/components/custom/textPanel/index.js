import React from "react";

import TextArea from "../../elements/textArea";
import CustomAccordion from "../../elements/customAccordion";

const TextPanel = ({
  tireData,
  tireAdditionalData,
  careData,
  careAdditionalData,
}) => {
  return (
    <div className="textPanel">
      <div className="row">
        <div className="col-xl-6">
          <h5 className="darkpurple">Tire changes and tire hotels</h5>
          {tireData.map((item, index) => {
            return (
              <div className="my-4" key={index}>
                <TextArea
                  type="tire"
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              </div>
            );
          })}
          {tireAdditionalData && (
            <CustomAccordion
              title="Additional Services"
              type="star"
              isAdditional={true}
              list={tireAdditionalData}
            />
          )}
        </div>
        <div className="col-xl-6">
          <h5 className="darkpurple">Car care</h5>
          {careData.map((item, index) => {
            return (
              <div className="my-4" key={index}>
                <TextArea
                  type="care"
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              </div>
            );
          })}
          {careAdditionalData && (
            <CustomAccordion
              title="Additional Services"
              type="star"
              isAdditional={true}
              list={careAdditionalData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TextPanel;
