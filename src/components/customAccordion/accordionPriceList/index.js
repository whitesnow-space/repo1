import React from "react";

const CustomAccordionPriceList = ({ priceList }) => {
  return (
    <div className="customAccordion-priceList">
      <div className="customAccordion-priceList-title row">
        <div className="col-7">Service</div>
        <div className="col-3"></div>
        <div className="col-2">Price</div>
      </div>
      {priceList &&
        priceList.map((item) => {
          return (
            <div className="customAccordion-priceList-item row">
              <div className="col-7">
                <span>{item.title}</span>
              </div>
              <div className="col-3"></div>
              <div className="col-2">{item.price}</div>
            </div>
          );
        })}
    </div>
  );
};

export default CustomAccordionPriceList;
