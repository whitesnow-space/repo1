import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "../pages";
import ElementsPage from "../pages/elements";

const ROUTES = [
  {
    Component: ElementsPage,
    path: "/elements",
  },
  {
    Component: IndexPage,
    path: "/",
  },
];

const CustomRoutes = () => {
  console.log("routes");
  return (
    <Routes>
      {ROUTES.map((route) => {
        return <Route {...route} key={route.path} />;
      })}
    </Routes>
  );
};

export default CustomRoutes;
