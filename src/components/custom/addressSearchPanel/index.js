import React from "react";

import CustomImage from "../../elements/customImage";
import Search from "../../elements/search";
import { IMGURLS } from "../../../consts";
import "./styles.scss";

const AddressSearchPanel = () => {
  return (
    <div className="addressSearchPanel">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <div className="addressSearchPanel-image">
            <CustomImage imgUrl={IMGURLS.address} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <p className="subtitle">See if we deliver to your address!</p>
          <p className="fw-bold darkpurple">
            Noddi is currently in Oslo-area. Search your address to see what we
            can deliver to you.
          </p>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default AddressSearchPanel;
