import React from "react";

import Button from "../../components/button";
import "./styles.scss";

const ElementsPage = () => {
  return (
    <div className="elementsPage">
      <h3>Welcome to ElementsPage</h3>
      <Button placeholder={"Darkpurple"} color={"darkpurple"} withIcon={true} />
      <Button placeholder={"White"} color={"white"} />
    </div>
  );
};

export default ElementsPage;
