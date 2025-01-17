import React from "react";
import { Routes, Route } from "react-router-dom";

import ElementsPage from "../pages/elements";
import PricePage from "../pages/pricePage";
import ServicePage from "../pages/servicePage";
import HelpPage from "../pages/helpPage";
import BusinessPage from "../pages/businessPage";
import LandingPage from "../pages/landingPage";

const ROUTES = [
  {
    Component: ElementsPage,
    path: "/elements",
  },
  {
    Component: PricePage,
    path: "/price",
  },
  {
    Component: ServicePage,
    path: "/service",
  },
  {
    Component: HelpPage,
    path: "/help",
  },
  {
    Component: BusinessPage,
    path: "/business",
  },
  {
    Component: LandingPage,
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
