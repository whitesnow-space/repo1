import React from "react";

const CustomAccordionPriceList = ({ priceList }) => {
  return (
    <div className="customAccordion-priceList">
      <div className="customAccordion-priceList-title row">
        <div className="col-5 col-sm-7">Service</div>
        <div className="col-4 col-sm-3"></div>
        <div className="col-3 col-sm-2">Price</div>
      </div>
      {priceList &&
        priceList.map((item, index) => {
          return (
            <div className="customAccordion-priceList-item" key={index}>
              <div className="row">
                <div className="col-5 col-sm-7">
                  <span className="darkpurple">{item.title}</span>
                </div>
                <div className="col-4 col-sm-3"></div>
                <div className="col-3 col-sm-2">
                  <span className="darkpurple">kr {item.price}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CustomAccordionPriceList;
