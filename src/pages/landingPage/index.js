import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AccordionPanel from "../../components/custom/accordionPanel";
import WorkPanel from "../../components/custom/workPanel";
import QuestionPanel from "../../components/custom/questionPanel";
import Button from "../../components/elements/button";
import CustomImage from "../../components/elements/customImage";

import { IMGURLS, PATH } from "../../consts";
import staticData from "../../consts/staticData"; /* static Data */
import "./styles.scss";
import AddressSearchPanel from "../../components/custom/addressSearchPanel";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landingPage">
      <div className="custom-container">
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
        <div className="landingPage-panel">
          <p className="subtitle">Here's how it works</p>
          <WorkPanel />
          <div className="row">
            <div className="col-6 col-md-6 col-lg-4 mx-auto mt-5">
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
            <div className="col-md-8 col-lg-6 mx-auto justify-content-center">
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
          <AccordionPanel
            tireData={staticData.tireData}
            tireAdditionalData={staticData.tireAdditionalData}
            careData={staticData.careData}
            careAdditionalData={staticData.careAdditionalData}
          />
        </div>
        <div className="landingPage-panel d-flex justify-content-between px-4">
          <p className="subtitle">Our Partner</p>
          <img src={IMGURLS.naf} alt="Partner-Img" />
        </div>
        <div className="landingPage-panel px-2">
          <div className="row">
            <div className="col-md-7 d-flex flex-column justify-content-between">
              <CustomImage imgUrl={IMGURLS.img4_1} />
              <div className="mt-3">
                <div className="row">
                  <div className="col-6 ps-0">
                    <CustomImage imgUrl={IMGURLS.img4_3} />
                  </div>
                  <div className="col-6 pe-0">
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
                <p className="darkpurple landingPage-calendars-text">
                  At Noddi, you choose when our technicians come to you. Simple
                  as that.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <Button
                    placeholder="Book your appiontment now"
                    color="darkpurple"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 landingPage-calendars">
              <div className="row">
                <div className="col-4 d-flex align-items-end">
                  <img
                    className="w-100"
                    src={IMGURLS.calendar_mobile}
                    alt="Calendar-modile"
                  />
                </div>
                <div className="col-8">
                  <img
                    className="w-100"
                    src={IMGURLS.calendar}
                    alt="Calendar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landingPage-panel">
          <p className="subtitle">Frequently Asked Questions</p>
          <QuestionPanel data={staticData.tireData} />
          <div className="row">
            <Link
              className="link col-md-6 col-lg-4 mx-auto mt-4"
              to={PATH.HELP}
            >
              <Button
                placeholder="See all frequently asked questions"
                color="darkpurple"
              />
            </Link>
          </div>
        </div>
        <AddressSearchPanel />
      </div>
    </div>
  );
};

export default LandingPage;
