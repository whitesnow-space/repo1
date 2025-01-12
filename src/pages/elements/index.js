import React from "react";

import Button from "../../components/button";
import CustomAccordion from "../../components/customAccordion";
import "./styles.scss";
import TextPanel from "../../components/textPanel";
import CopyClipboard from "../../components/copyClipboard";

const ElementsPage = () => {
  /* Static Data */
  const staticData = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    list: [
      { title: "title-1", price: "KP-1" },
      { title: "title-2", price: "KP-2" },
      { title: "title-3", price: "KP-3" },
    ],
  };

  return (
    <div className="elementsPage">
      <h3>Welcome to ElementsPage</h3>
      <p>button</p>
      <Button placeholder={"Darkpurple"} color={"darkpurple"} withIcon={true} />
      <Button placeholder={"White"} color={"white"} />

      <p>Accordion</p>

      <CustomAccordion
        type="care"
        title="Car Wash"
        price={55}
        description={staticData.description}
      />
      <CustomAccordion
        type="star"
        title="Additional Services"
        isAdditional={true}
        list={staticData.list}
      />

      <p>TextPanel</p>
      <TextPanel
        type="tire"
        title="Tire Change"
        price={1023}
        description={staticData.description}
      />

      <p>CopyClipboard</p>
      <CopyClipboard placeholder="beforeCopy" type="general" />
    </div>
  );
};

export default ElementsPage;
