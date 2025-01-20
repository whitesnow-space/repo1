import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landingPage";
import ElementsPage from "../pages/elements";
import PricePage from "../pages/pricePage";
import ServicePage from "../pages/servicePage";
import HelpPage from "../pages/helpPage";
import BusinessPage from "../pages/businessPage";
import BookingPage from "../pages/bookingPage";
import AboutPage from "../pages/aboutPage";
import PrivacyPage from "../pages/privacyPage";
import TermsPage from "../pages/termsPage";
import WorkPage from "../pages/workPage";
import { PATH } from "../consts";

const ROUTES = [
  {
    Component: ElementsPage,
    path: PATH.ELEMENTS,
  },
  {
    Component: PricePage,
    path: PATH.PRICE,
  },
  {
    Component: ServicePage,
    path: PATH.SERVICE,
  },
  {
    Component: HelpPage,
    path: PATH.HELP,
  },
  {
    Component: BusinessPage,
    path: PATH.BUSINESS,
  },
  {
    Component: BookingPage,
    path: PATH.BOOKING,
  },
  {
    Component: AboutPage,
    path: PATH.ABOUT,
  },
  {
    Component: PrivacyPage,
    path: PATH.PRIVACY,
  },
  {
    Component: TermsPage,
    path: PATH.TERMS,
  },
  {
    Component: WorkPage,
    path: PATH.WORK,
  },
  {
    Component: LandingPage,
    path: PATH.INDEX,
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
