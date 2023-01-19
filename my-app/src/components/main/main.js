import React from "react";
import { Bottom } from "./bottom/bottom";
import { Card } from "./card/card";
import { Graph } from "./graph/graph";

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
