import React, { useState } from "react";
import "./SuperAdminPanel.css";
import BusinessPanelPage from "../../Pages/BusinessPanelPage/BusinessPanelPage";
import logo from "../../Assets/DekhoMarket-01.png"

const SuperAdminPanel = () => {
  return (
    <>
      <div className="superadminpanel">
        <div className="superadminpanelleft">
          <img src={logo} alt="" />
        </div>
        <div className="superadminpanelright">
          <div className="supperloged"><i class="fa-regular fa-bell"></i></div>
          <div className="supperloged">S</div>
        </div>
      </div>
      <BusinessPanelPage />
    </>
  );
};

export default SuperAdminPanel;
 