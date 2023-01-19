import React from "react";
import "../bottom/bottom.css";
import reload from "../../../images/reload.png";
import close from "../../../images/x.png";
import person from "../../../images/person.jpg";
import gear from "../../../images/gear.png";
import triangle from "../../../images/triangle.png";
import pencil from "../../../images/pencil.png";

export const Bottom = () => {
  const empData = [
    {
      id: 1,

      person: person,
      name: "Tania Mike",
      job: "Develop",
      salary: "€ 99,225",
      icon1: reload,
      icon2: close,
    },
    {
      id: 2,

      person: person,
      name: "John Doe",
      job: "CEO",
      salary: "€ 89,241",
      icon1: reload,
      icon2: close,
    },
    {
      id: 3,

      person: person,
      name: "Alexa Mike",
      job: "Design",
      salary: "€ 92,144",
      icon1: reload,
      icon2: close,
    },
    {
      id: 4,

      person: person,
      name: "Jana Monday",
      job: "Marketing",
      salary: "€ 49,990",
      icon1: reload,
      icon2: close,
    },
    {
      id: 5,

      person: person,
      name: "Paul Dickens",
      job: "Develop",
      salary: "€ 69,201",
      icon1: reload,
      icon2: close,
    },
    {
      id: 6,

      person: person,
      name: "Manuela Rico",
      job: "Manager",
      salary: "€ 99,201",
      icon1: reload,
      icon2: close,
    },
  ];
  return (
    <div>
      <div className="total-card">
        <div className="card-notif">
          <div className="cardin-notif">
            <div>
              <div className="notehead">
                <div className="noteh1">
                  <p className="default notif-line1 ">TASKS(5)</p>
                  <p className="default notif-line2 ">Today</p>
                </div>

                <div className="notif-lineicon">
                  <img className="gear" src={gear} alt="" />
                  <img className="tri" src={triangle} alt="" />
                </div>
              </div>
              <hr className="horline-not"></hr>

              <div className="notrow1">
                <div>
                  <h4 className="default alignnotif1">
                    Update the Documentation
                  </h4>
                  <p className="default alignnotif2">
                    Dwuamish Head, Seattle, WA 8:47 AM
                  </p>
                </div>
                <div className="pencil-align">
                  <img className="pencil" src={pencil} alt="" />
                </div>
              </div>
              <hr className="horline-not"></hr>
              <div className="notrow1">
                <div>
                  <h4 className="default alignnotif1">GDPR Compliance</h4>
                  <p className="default alignnotif2">
                    The GDPR is a regulation that requires <br></br> businesses
                    to protect the personal data and <br />
                    privacy of Europe citizens for transactions that <br />
                    occur within EU member states.
                  </p>
                </div>
                <div className="pencil-align">
                  <img className="pencil" src={pencil} alt="" />
                </div>{" "}
              </div>
              <hr className="horline-not"></hr>

              <div className="notrow1">
                <div>
                  <h4 className="default alignnotif1">Solve the issues</h4>
                  <p className="default alignnotif2">
                    Fifty percent of all respondents said they would be more
                    likely to shop at a company
                  </p>
                </div>
                <div className="pencil-align">
                  <img className="pencil" src={pencil} alt="" />
                </div>
              </div>
              <hr className="horline-not"></hr>

              <div className="notrow1">
                <div>
                  <h4 className="default alignnotif1">Release v2.0.0</h4>
                  <p className="default alignnotif2">
                    Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
                  </p>
                </div>
                <div className="pencil-align">
                  <img className="pencil" src={pencil} alt="" />
                </div>{" "}
              </div>
              <hr className="horline-not"></hr>

              <div className="notrow1">
                <div>
                  <h4 className="default alignnotif1">
                    Export the processed files
                  </h4>
                  <p className="default alignnotif2">
                    The report also shows that consumers will not easily forgive
                    a company once a breach
                  </p>
                </div>
                <div className="pencil-align">
                  <img className="pencil" src={pencil} alt="" />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="card-table">
          <div className="cardin-table">
            <div>
              <div className="table-head">
                <p className="table-title">Management Table</p>
                <div className="table-icons-head">
                  <img className="gear" src={gear} alt="" />
                  <img className="tri" src={triangle} alt="" />
                </div>
              </div>
              <table className="table-center">
                <thead>
                  <tr className="rowline">
                    <td className="tab-align-0">#</td>
                    <td className="tab-align-2">NAME</td>
                    <td className="tab-align-3">JOB POSITION</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </thead>

                <tbody>
                  {empData.map((list) => (
                    <tr key={list.id}>
                      <td>
                        <img
                          className="profile tab-align-1"
                          src={list.person}
                          alt="as"
                        />
                      </td>

                      <td className="tab-align-2">{list.name}</td>
                      <td className="tab-align-3">{list.job}</td>
                      <td className="tab-align-4">{list.salary}</td>
                      <td>
                        <img className="reload" src={list.icon1} alt="ad" />
                      </td>
                      <td>
                        <img className="close" src={list.icon2} alt="ad" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
