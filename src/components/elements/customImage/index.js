import React from "react";

import "./styles.scss";

const CustomImage = ({ imgUrl }) => {
  return (
    <>
      <img className="customImage" src={imgUrl} alt="customImage" />
    </>
  );
};

export default CustomImage;
