import React from "react";
import { Link } from "react-router-dom";

import Button from "../../elements/button";
import CustomImage from "../../elements/customImage";
import CopyClipboard from "../../elements/copyClipboard";

import { IMGURLS } from "../../../consts";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-xl-4 col-12">
            <div className="row">
              <div className="col-6 col-xl-12">
                <img
                  className="footer-logo"
                  src="assets/images/logo.png"
                  alt="footer-logo"
                />
                <p className="darkpurple mt-3">Give us a nod.</p>
                <div className="footer-links d-flex mb-2">
                  <i className="footer-link bi bi-envelope"></i>
                  <i className="footer-link bi bi-linkedin"></i>
                  <i className="footer-link bi bi-telephone"></i>
                  <i className="footer-link bi bi-instagram"></i>
                </div>
              </div>
              <div className="col-6 col-xl-12">
                <Link className="link footer-plink">
                  <p>Prices</p>
                </Link>
                <Link className="link footer-plink">
                  <p>Service</p>
                </Link>
                <Link className="link footer-plink">
                  <p>Help and Contact</p>
                </Link>
                <Link className="link footer-plink">
                  <p>For Business</p>
                </Link>
                <Link className="link footer-plink">
                  <p>About Us</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-12">
            <div className="footer-panel">
              <div className="footer-image">
                <CustomImage imgUrl={IMGURLS.footer} />
              </div>
              <div className="footer-texts">
                <p className="subtitle">Work for us?</p>
                <p className="darkpurple">
                  Are you looking for extra income working with seasonal
                  wheel-change, or employment as a mobile car retailer?
                </p>
                <p className="darkpurple">
                  We are constantly looking for talented workers in the citites
                  we operate in. Reach out&nbsp;
                  <CopyClipboard
                    placeholder="work@noddi.no"
                    type="general"
                  />{" "}
                  if you are interested in any of the following opportunities.
                </p>
                <div className="row align-items-center">
                  <div className="footer-address col-12 col-md-7 d-flex justify-content-center">
                    <span>
                      Reach out at&nbsp;
                      <CopyClipboard
                        placeholder="work@noddi.no"
                        type="general"
                      />
                    </span>
                  </div>
                  <div className="footer-button col-12 col-md-5">
                    <Button
                      placeholder="Read more"
                      color="darkpurple"
                      withIcon={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
