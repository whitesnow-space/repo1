import React, { useEffect } from "react";

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bookingPage">
      <div className="custom-container">
        <div>
          <p className="title">What service do you want?</p>
        </div>
        <div>
          <div className="form">
            <div className="form-item">
              <p>Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
