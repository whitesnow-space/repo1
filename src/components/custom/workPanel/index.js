import React from "react";

import WorkPanelItem from "./workPanelItem";
import { IMGURLS } from "../../../consts";

const WorkPanel = () => {
  const data = [
    {
      number: 1,
      text: "Book an appointment and tell us where the car is parked",
      imgUrl: IMGURLS.car1,
    },
    {
      number: 2,
      text: "We will come and help you with the service you have booked - even if you are not at home.",
      imgUrl: IMGURLS.car2,
    },
    {
      number: 3,
      text: "As soon as we're done you'll be notified!",
      imgUrl: IMGURLS.car3,
    },
  ];

  return (
    <div className="workPanel row">
      {data.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            <WorkPanelItem data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default WorkPanel;
