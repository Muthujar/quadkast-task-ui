import React from "react";
import { Bottom } from "./bottom/bottom";
import { Card } from "./card/card";
import { Graph } from "./graph/graph";
import icon1 from "../../images/cardicon1.png";
import icon2 from "../../images/cardicon2.png";
import icon3 from "../../images/cardicon3.png";
import "../main/main.css";

export const Main = () => {
  return (
    <div className="maincon">
      <Card />
      <Graph />
      <Bottom />
    </div>
  );
};
