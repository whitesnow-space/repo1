import React from "react";

import Button from "../../components/elements/button";
import CustomImage from "../../components/elements/customImage";
import { IMGURLS } from "../../consts";
import "./styles.scss";

const landingPage = () => {
  return (
    <div className="row custom-container">
      <div className="landingPage col-md-10 mx-auto">
        <div className="row landingPage-panel">
          <div className="col-md-6">
            <CustomImage imgUrl={IMGURLS.heroImg} />
          </div>
          <div className="col-md-6 d-flex align-items-center landingPage-welcome">
            <div>
              <p className="darkpurple title">
                Don't worry about tire changes, tire hotels and car cleaning
              </p>
              <p className="purple title">We'll come to you.</p>
              <Button
                placeholder="Booking now"
                color="darkpurple"
                withIcon={true}
              />
            </div>
          </div>
        </div>
        <div className="langingPage-panel">
          <p className="subtitle">Here's how it works</p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default landingPage;
