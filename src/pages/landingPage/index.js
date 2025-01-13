import React from "react";
import { Link } from "react-router-dom";

import WorkPanel from "../../components/custom/workPanel";
import Button from "../../components/elements/button";
import CustomImage from "../../components/elements/customImage";
import CustomAccordion from "../../components/elements/customAccordion";
import { IMGURLS } from "../../consts";
import staticData from "../../consts/staticData"; /* static Data */
import "./styles.scss";

const LandingPage = () => {
  return (
    <div className="custom-container">
      <div className="landingPage">
        <div className="landingPage-panel">
          <div className="row">
            <div className="col-md-6 col-12 px-0">
              <CustomImage imgUrl={IMGURLS.heroImg} />
            </div>
            <div className="col-md-6 col-12 d-flex align-items-center landingPage-welcome">
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
        </div>
        <div className="langingPage-panel">
          <p className="subtitle">Here's how it works</p>
        </div>
        <div className="landingPage-panel">
          <WorkPanel />
          <div className="row">
            <div className="col-6 col-md-4 mx-auto mt-5">
              <Link className="link">
                <Button
                  placeholder="Book your appointment now"
                  color="darkpurple"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="landingPage-panel">
          <div className="row">
            <div className="col-md-6 mx-auto justify-content-center">
              <p className="darkpurple subtitle text-center">
                Services and Prices
              </p>
              <Link className="link">
                <Button
                  placeholder="Learn more about what is included in the different services"
                  color="darkpurple"
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <h5 className="darkpurple">Tire changes and tire hotels</h5>
              {staticData.tireData.map((item, index) => {
                return (
                  <CustomAccordion
                    title={item.title}
                    type="tire"
                    price={item.price}
                    key={index}
                  />
                );
              })}
              <CustomAccordion
                title="Additional Services"
                type="star"
                isAdditional={true}
                list={staticData.tireAdditionalData}
              />
            </div>
            <div className="col-xl-6">
              <h5 className="darkpurple">Car Care</h5>
              {staticData.careData.map((item, index) => {
                return (
                  <CustomAccordion
                    title={item.title}
                    type="care"
                    price={item.price}
                    key={index}
                  />
                );
              })}
              <CustomAccordion
                title="Additional Services"
                type="star"
                isAdditional={true}
                list={staticData.careAdditionalData}
              />
            </div>
          </div>
        </div>
        <div className="landingPage-panel d-flex justify-content-between px-4">
          <p className="subtitle">Our Partner</p>
          <img src={IMGURLS.naf} alt="Partner-Img" />
        </div>
        <div className="landingPage-panel p-4">
          <div className="row">
            <div className="col-md-7 d-flex flex-column justify-content-between">
              <CustomImage imgUrl={IMGURLS.img4_1} />
              <div className="mt-3">
                <div className="row">
                  <div className="col-6">
                    <CustomImage imgUrl={IMGURLS.img4_3} />
                  </div>
                  <div className="col-6">
                    <CustomImage imgUrl={IMGURLS.img4_3} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 img4">
              <CustomImage imgUrl={IMGURLS.img4_2} />
            </div>
          </div>
        </div>
        <div className="landingPage-panel">
          <div className="row align-items-center">
            <div className="col-md-5 d-flex flex-column justify-content-between">
              <div>
                <p className="subtitle darkpurple">
                  Book a time that fits your schedule.
                </p>
                <p className="darkpurple">
                  At Noddi, you choose when our technicians come to you. Simple
                  as that.
                </p>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <Button
                    placeholder="Book your appiontment now"
                    color="darkpurple"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 row">
              <div className="col-4 d-flex align-items-end">
                <img
                  className="w-100"
                  src={IMGURLS.calendar_mobile}
                  alt="Calendar-modile"
                />
              </div>
              <div className="col-8">
                <img className="w-100" src={IMGURLS.calendar} alt="Calendar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
