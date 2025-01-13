import React from "react";

import "./styles.scss";

const WorkPanelItem = ({ data }) => {
  return (
    <div className="workPanelItem row">
      <div className="row workPanelItem-panel col-sm-6 col-md-12">
        <div className="d-flex justify-content-center align-items-center workPanelItem-number-panel col-3">
          <div className="workPanelItem-number">{data.number}</div>
        </div>
        <div className="workPanelItem-text darkpurple col-9">{data.text}</div>
      </div>
      <div className="col-sm-6 col-md-12">
        <img src={data.imgUrl} alt="workPanel-img" />
      </div>
    </div>
  );
};

export default WorkPanelItem;
