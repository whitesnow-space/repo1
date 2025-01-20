import React from "react";

import CopyClipboard from "../../components/elements/copyClipboard";
import CardPanel from "../../components/custom/cardPanel";
import AddressSearchPanel from "../../components/custom/addressSearchPanel";
import staticData from "../../consts/staticData";
import "./styles.scss";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="custom-container">
        <div className="aboutPage-panel mb-5">
          <p className="title">About Us</p>
          <p>
            Noddi is a technology-driven provider of car retention services,
            with a vision to make car maintenance as easy as possible for our
            customers.
          </p>
          <p>
            We move as many services as possible to where your car is parked, so
            you minimize unnecessary travel time and make more time for the
            important things in life.
          </p>
          <div className="aboutPage-email bg-white rounded-2 w-auto">
            <span>
              Send us a message at <CopyClipboard placeholder="hei@noddi.no" />{" "}
              if you want to get in touch
            </span>
          </div>
        </div>
        <div className="aboutPage-panel">
          <p className="subtitle">Our employees</p>
          <CardPanel list={staticData.profileList} />
        </div>
        <AddressSearchPanel />
      </div>
    </div>
  );
};

export default AboutPage;
