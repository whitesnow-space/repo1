import React from "react";

import SimpleAccordion from "../../elements/simpleAccordion";

const QuestionPanel = ({ data }) => {
  return (
    <div className="questionPanel">
      {data.map((item, index) => {
        return (
          <div className="mb-3" key={index}>
            <SimpleAccordion data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionPanel;
