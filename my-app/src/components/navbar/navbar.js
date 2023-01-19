import React from "react";
import "../navbar/navbar.css";
import search from "../../images/search.png";
import waves from "../../images/waves.png";
import triangle from "../../images/triangle.png";

export const Navbar = () => {
  return (
    <div className="contain">
      <div className="nav-start">
        <i className="fa fa-bars menubar"></i>{" "}
        <h4 className="nav-title">DASHBOARD</h4>
      </div>
      <div className="nav-end">
        <div>
          <img className="searchcon" src={search} alt=""></img>
          <img className="searchcon" src={waves} alt=""></img>
        </div>
        <div>
          <img
            className="pic1"
            alt=""
            src="https://demos.creative-tim.com/black-dashboard-pro-react/static/media/mike.da320cd2.jpg"
          ></img>
          <img className="triangle" src={triangle} alt=""></img>
        </div>
      </div>
    </div>
  );
};
