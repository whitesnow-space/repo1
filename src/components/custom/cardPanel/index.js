import React from "react";

import ProfileCard from "../../elements/profileCard";

const CardPanel = ({ list }) => {
  return (
    <div className="cardPanel">
      <div className="row">
        {list &&
          list.map((item, index) => {
            return (
              <div className="col-6 col-lg-3" key={index}>
                <ProfileCard profile={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CardPanel;
