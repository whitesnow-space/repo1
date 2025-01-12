import React from "react";
import { Routes, Route } from "react-router-dom";

import ElementsPage from "../pages/elements";
import landingPage from "../pages/landingPage";

const ROUTES = [
  {
    Component: ElementsPage,
    path: "/elements",
  },
  {
    Component: landingPage,
    path: "/",
  },
];

const CustomRoutes = () => {
  return (
    <Routes>
      {ROUTES.map((route) => {
        return <Route {...route} key={route.path} />;
      })}
    </Routes>
  );
};

export default CustomRoutes;
