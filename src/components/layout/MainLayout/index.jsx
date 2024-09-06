import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";
import Header from "../../Header";
import Footer from "../../Footer";

const MainLayout = () => {
  return (
    <div className="main-layout-container container">
      <div className="main-layout-container__header">
        <Header />
      </div>
      <div className="main-layout-container__content container-mw-1200">
        <Outlet />
      </div>
      <div className="main-layout-container__footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
