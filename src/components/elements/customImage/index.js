import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const CustomImage = ({ imgUrl }) => {
  return (
    <>
      <img className="customImage" src={imgUrl} alt="customImage" />
    </>
  );
};

CustomImage.propTypes = {
  imgUrl: PropTypes.string,
};

export default CustomImage;
