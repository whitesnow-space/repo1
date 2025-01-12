import React from "react";

import "./styles.scss";

const customImage = ({ imgUrl }) => {
  return (
    <>
      <img className="customImage" src={imgUrl} alt="customImage" />
    </>
  );
};

export default customImage;
