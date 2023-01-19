import React from "react";
import "../card/card.css";
import icon1 from "../../../images/cardicon1.png";
import icon2 from "../../../images/cardicon2.png";
import icon3 from "../../../images/cardicon3.png";
import reload from "../../../images/reload.png";
import waves from "../../../images/waves.png";
import trophy from "../../../images/trophy.png";
import smartwatch from "../../../images/smartwatch.png";

export const Card = () => {
  const cardData = [
    {
      id: 1,
      icon: icon1,
      title: "Number",
      titleData: "150GB",
      tag: reload,

      footer: "Update Now",
    },
    {
      id: 2,

      icon: icon2,
      title: "Followers",
      titleData: "+45k",
      tag: waves,

      footer: "Last Research",
    },
    {
      id: 3,

      icon: icon3,
      title: "Users",
      titleData: "150,000",
      tag: trophy,

      footer: "Customers feedback",
    },
    {
      id: 4,

      icon: icon1,
      title: "Errors",
      titleData: "12",
      tag: smartwatch,

      footer: "in the last hours",
    },
  ];
  return (
    <div className="card">
      {cardData.map((list) => (
        <div key={list.id} className="cardin">
          <div>
            <div className="align1">
              <div>
                <img className="profileicon" src={list.icon} alt="as" />
              </div>
              <div className="title-align">
                <p className="default colortype1">{list.title}</p>
                <h2 className="default colortype2">{list.titleData}</h2>
              </div>
            </div>
            <hr className="horline"></hr>
            <div className="align2">
              <img className="profileicon2" src={list.tag} alt="as" />

              <p className="default positionfoot colortype1">{list.footer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
