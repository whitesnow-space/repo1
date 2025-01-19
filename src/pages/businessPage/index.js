import React, { useEffect } from "react";

import Button from "../../components/elements/button";
import Input from "../../components/elements/input";
import CopyClipboard from "../../components/elements/copyClipboard";
import CustomImage from "../../components/elements/customImage";
import TextPanel from "../../components/custom/textPanel";
import { IMGURLS } from "../../consts";
import staticData from "../../consts/staticData";
import "./styles.scss";

const BusinessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="businessPage">
      <div className="custom-container">
        <div className="businessPage-panel">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7 mb-5 businessPage-title">
              <span className="darkpurple">Noddi for Businesses</span>
              <p className="title darkpurple">Focus on your work</p>
              <p className="title purple">don't worry about the car.</p>
              <p className="darkpurple">
                Do you need help with a car wash, wheel change or tire hotel on
                the company cars?
              </p>
              <div className="p-3 rounded-2 bg-white d-inline-block">
                <span className="darkpurple">
                  Get in touch at&nbsp;
                  <CopyClipboard
                    placeholder="bedrift@noddi.no"
                    type="general"
                  />
                  , or in the form below to find out how we can help your
                  business.
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-5 px-0 mb-5">
              <CustomImage imgUrl={IMGURLS.business} />
            </div>
          </div>
        </div>
        <div className="businessPage-panel">
          <p className="subtitle">Fill out the form and we'll get in touch</p>
          <div className="businessPage-form">
            <div className="businessPage-form-item">
              <p>Your name</p>
              <Input className="form-input" />
            </div>
            <div className="businessPage-form-item">
              <p>Phone number</p>
              <Input className="form-input" />
            </div>
            <div className="businessPage-form-item">
              <p>Email</p>
              <Input className="form-input" />
            </div>
            <div className="mt-3">
              <Button placeholder="Submit" color="darkpurple" />
            </div>
          </div>
        </div>
        <div className="businessPage-panel mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 ps-0">
              <p className="darkpurple fs-4">
                "We have used Noddi to wash the municipality service cars and we
                are very satisfied. They are effieient and reliable, so our cars
                are always ready for use. It has saved us both time and
                resources, and we can rather focus on the operation of the
                municipality. Noddi has made our everyday lives more efficient."
              </p>
              <p className="darkpurple">
                - Jarle Veiby, Lillestrom Municipality
              </p>
            </div>
            <div className="col-12 col-lg-6 px-0">
              <CustomImage imgUrl={IMGURLS.img5} />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <p className="subtitle">The services we offer for business</p>
          </div>
          <TextPanel
            tireData={staticData.tireData}
            careData={staticData.careData}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
