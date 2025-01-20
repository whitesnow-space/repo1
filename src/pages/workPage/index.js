import React, { useEffect } from "react";

import CopyClipboard from "../../components/elements/copyClipboard";
import "./styles.scss";

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="workPage">
      <div className="custom-container">
        <div>
          <p className="title darkpurple">Work for Noddi?</p>
          <p>
            Are you looking for extra income working with seasonal wheel-change,
            or employment as a mobile car detailer?
          </p>
          <p>
            We are constantly looking for talented workers in the cities we
            operate in, reach out <CopyClipboard placeholder="hei@noddi.no" />
            &nbsp;if you are interested in any of the following opportunities.
          </p>
          <div className="workPage-button1 p-3 bg-white rounded-2 d-flex justify-content-center">
            <span>
              React out at <CopyClipboard placeholder="work@noddi.no" />
            </span>
          </div>
        </div>
        <div className="mt-5">
          <p className="subtitle">About the job</p>
          <p>
            <strong>Wheel changers</strong>
          </p>
          <div>
            <li>Can you change the wheels on a car?</li>
            <li>Do you like working on your own</li>
            <li>Are you somewhat handy and enjoy physical work?</li>
          </div>
          <p>If so, we might be a good match.</p>
          <p>
            We are looking for service and quality oriented Wheel Change
            Partners in the Greater Osolo Area.
          </p>
          <p>
            <strong>What we can provide:</strong>
          </p>
          <div>
            <li>Average pay of 300 NOK per hour</li>
            <li>Paid milage and paid tolls</li>
            <li>We provide the tools you need</li>
            <li>
              Flexible working hours between 07:00 and 21:00, seven days a week
            </li>
            <li>Quick support if you need help</li>
          </div>
          <p>
            <strong>What you need:</strong>
          </p>
          <div>
            <li>A car and a valid driver's license</li>
            <li>
              ID / Passport / Residence card(if you come from a country other
              than Norway)
            </li>
            <li>Smartphone with data access</li>
            <li>Basic English or Norwegian language</li>
          </div>
          <p>
            <strong>What a day looks like:</strong>
          </p>
          <p>
            The job consists of traveling to our customers and change wheels on
            their cars where the car is parked. You simply register your
            preferred working hours in our app, and be assigned jobs based on
            your preferences. We will supply you with all necessary tools and
            clothing!
          </p>
          <div className="workPage-button2 p-3 bg-white rounded-2 d-flex justify-content-center">
            <span>
              Sounds interesting? Reach out at{" "}
              <CopyClipboard placeholder="work@noddi.no" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
