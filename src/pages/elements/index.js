import React from "react";

import Button from "../../components/elements/button";
import Input from "../../components/elements/input";
import CustomAccordion from "../../components/elements/customAccordion";
import TextPanel from "../../components/elements/textPanel";
import CopyClipboard from "../../components/elements/copyClipboard";
import CustomImage from "../../components/elements/customImage";
import SimpleAccordion from "../../components/elements/simpleAccordion";
import CustomNavbar from "../../components/custom/navbar";
import staticData from "../../consts/staticData"; /* staticData */
import "./styles.scss";

const ElementsPage = () => {
  return (
    <div className="elementsPage">
      <h3>Welcome to ElementsPage</h3>
      <p>Navbar</p>
      <CustomNavbar />

      <p>button</p>
      <Button placeholder={"Darkpurple"} color={"darkpurple"} withIcon={true} />
      <Button placeholder={"White"} color={"white"} />

      <p>Input</p>
      <Input placeholder={"See if we deliver to your address"} />

      <p>Accordion</p>

      <CustomAccordion type="care" title="Car Wash" price={55} />
      <CustomAccordion
        type="star"
        title="Additional Services"
        isAdditional={true}
        list={staticData.list}
      />

      <SimpleAccordion data={staticData.tireData[0]} />

      <p>TextPanel</p>
      <TextPanel
        type="tire"
        title="Tire Change"
        price={1023}
        description={staticData.description}
      />

      <p>CopyClipboard</p>
      <CopyClipboard placeholder="beforeCopy" type="general" />

      <p>customImage</p>
      <CustomImage imgUrl={staticData.imgUrl} />
    </div>
  );
};

export default ElementsPage;
