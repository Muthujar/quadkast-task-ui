import React, { Component } from "react";
import "../sidebar/sidebar.css";
import react from "../../images/react.png";
import pages from "../../images/pages.png";
import components from "../../images/components.png";
import forms from "../../images/forms.png";
import tables from "../../images/tables.png";
import maps from "../../images/maps.png";
import widgets from "../../images/widgets.png";
import charts from "../../images/charts.png";
import dashboard from "../../images/dashboard.png";
import triangle from "../../images/triangle.png";

export const Sidebar = () => {
  return (
    <div className="sidebox">
      <div className="insidebox">
        <div className="sidealign1">
          <img className="sideicons1" alt="" src={react}></img>

          <h3 className=" he">CREATIVE TIM</h3>
        </div>
        <div className="lineside">
          <hr className="sideline"></hr>
        </div>
        <div className="sideflex1">
          <img className="sideicons2" alt="" src={dashboard}></img>

          <p className="sidemenutext">DASHBOARD</p>
        </div>
        <div className="sideflex">
          <img className="sideicons2" alt="" src={pages}></img>

          <p className="sidemenutext">PAGES</p>
          <div className="triend">
            <img className="sideicons3" alt="" src={triangle}></img>
          </div>
        </div>
        <div className="sideflex">
          <img className="sideicons2" alt="" src={components}></img>
          <p className="sidemenutext">COMPONENTS</p>
          <div className="triend">
            <img className="sideicons3" alt="" src={triangle}></img>
          </div>{" "}
        </div>
        <div className="sideflex">
          <img className="sideicons2" alt="" src={forms}></img>
          <p className="sidemenutext">FORMS</p>
          <div className="triend">
            <img className="sideicons3" alt="" src={triangle}></img>
          </div>{" "}
        </div>
        <div className="sideflex">
          <img className="sideicons2" alt="" src={tables}></img>
          <p className="sidemenutext">TABLES</p>
          <div className="triend">
            <img className="sideicons3" alt="" src={triangle}></img>
          </div>{" "}
        </div>
        <div className="sideflex">
          <img className="sideicons2" alt="" src={maps}></img>
          <p className="sidemenutext">MAPS</p>
          <div className="triend">
            <img className="sideicons3" alt="" src={triangle}></img>
          </div>{" "}
        </div>
        <div className="sideflex1">
          <img className="sideicons2" alt="" src={widgets}></img>

          <p className="sidemenutext">WIDGETS</p>
        </div>
        <div className="sideflex1">
          <img className="sideicons2" alt="" src={charts}></img>

          <p className="sidemenutext">CHARTS</p>
        </div>
      </div>
    </div>
  );
};
