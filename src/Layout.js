import React from "react";
import Header from "./pages/Header";
import ToTop from "./pages/ToTop";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

const Layout = ({ gugun, travelData }) => {
  return (
    <div className="Wrap">
      <Header gugun={gugun} travelData={travelData} />
      <Outlet />
      <Footer />
      <ToTop />
    </div>
  );
};

export default Layout;
