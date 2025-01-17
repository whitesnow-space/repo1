import React from "react";

import CopyClipboard from "../../components/elements/copyClipboard";
import QuestionPanel from "../../components/custom/questionPanel";
import Footer from "../../components/custom/footer";
import staticData from "../../consts/staticData";

const helpPage = () => {
  return (
    <div className="helpPage">
      <div className="custom-container">
        <div>
          <div className="row align-items-center">
            <div className="col-xl-6 mb-5">
              <p className="title darkpurple">Frequently Asked Questions</p>
            </div>
            <div className="col-xl-6 p-5 mb-5 bg-white rounded">
              <span className="darkpurple">
                If you have any questions your can't fubd an answer to here, you
                can reach us by phone{" "}
                <CopyClipboard placeholder="+47 23 96 02 52" />. You can also
                send us an email at <CopyClipboard placeholder="hei@noddi.no" />
              </span>
            </div>
          </div>
        </div>
        <QuestionPanel data={staticData.careData} />
      </div>
      <Footer />
    </div>
  );
};

export default helpPage;
