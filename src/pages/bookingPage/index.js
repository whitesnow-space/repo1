import React, { useEffect } from "react";

import Search from "../../components/elements/search";
import Input from "../../components/elements/input";

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bookingPage">
      <div className="custom-container">
        <div>
          <p className="title">What service do you want?</p>
          <Search />
        </div>
        <div>
          <div className="form">
            <div className="form-item">
              <p>Location</p>
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
