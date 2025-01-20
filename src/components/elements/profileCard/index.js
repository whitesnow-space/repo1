import React from "react";
import { Link } from "react-router-dom";

import CustomImage from "../customImage";
import "./styles.scss";

const ProfileCard = ({ profile }) => {
  return (
    <div className="profileCard">
      <CustomImage imgUrl={profile.image} />
      <div className="px-2">
        <p className="profileCard-name">
          <strong>{profile.name}</strong>
        </p>
        <p className="profileCard-role">{profile.role}</p>
        <div className="d-flex">
          <Link className="profileCard-link" to={profile.email}>
            <i className="footer-link bi bi-envelope"></i>
          </Link>
          <Link className="profileCard-link" to={profile.linkedin}>
            <i className="footer-link bi bi-linkedin"></i>
          </Link>
          <Link className="profileCard" to={profile.phone}>
            <i className="footer-link bi bi-telephone"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
