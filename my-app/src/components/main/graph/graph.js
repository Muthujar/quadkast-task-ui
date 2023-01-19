import React from "react";
import "../graph/graph.css";
import bell from "../../../images/bell.png";
import truck from "../../../images/truck.png";
import telegram from "../../../images/telegram.png";
import graph from "../../../images/graph1.png";

export const Graph = () => {
  const graphData = [
    {
      id: 1,

      title: "Total Shipments",
      gicons: bell,

      titleData: "763,215",
      graph: graph,
    },
    {
      id: 2,
      title: "Daily Sales",
      gicons: truck,

      titleData: "3,500€",
      graph: graph,
    },
    {
      id: 3,
      title: "Completed Tasks",
      gicons: telegram,

      titleData: "12,100k",
      graph: graph,
    },
  ];

  return (
    <div className="card-graph">
      {graphData.map((list) => (
        <div key={list.id} className="cardin-graph">
          <div className="graph-align">
            <p className="default graph-align1">{list.title}</p>
            <div className="graphline2">
              <img className="gicons" src={list.gicons} alt="as" />
              <h2 className="default graph-align2">{list.titleData}</h2>
            </div>
            <div className="graphline3">
              <img className="graph1" src={list.graph} alt="as" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
