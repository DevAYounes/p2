"use client";
import React, { useEffect, useState } from "react";
import PollCard from "./Components/PollCard";
import { Col, Row } from "antd";
import Globals from "../../../Globals";
import axios from "axios";
const BASE_URL = "http://localhost:2000/";
import axiosInstance from '../axiosInterceptorInstance';

// try {
//   var UserToken = localStorage.getItem("UserToken");
//   if (UserToken) {
//     Globals.logged = true;
//     debugger
//   } else {
//     Globals.logged = false;
//   }
// } catch (error) {console.log(error)}
const Dashboard = () => {
  const [pollCards, setPollCards] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "getPolls/")
      .then((data) => {
        const reData = data.data;
        // var filtered;
        // filtered = data.data.filter((f) => {
        //   return f.length;
        // });
        // for (let index = 0; index < filtered.length; index++) {
        //   var merged = filtered[0].concat(filtered[index]);
        // }
        var i;
        for (i = 0; i < reData.length; i++) {
          reData[i].Options = reData[i]["dbo.Options"];
        }
        console.log(reData);
        setPollCards(reData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const isLogged = Globals.logged;

  return (
    <div>
      <span
        className="form-label p-3"
        style={{ fontFamily: "fantasy", fontSize: "x-large" }}
      >
        All polls
      </span>
      <Row style={{ marginTop: 20 }} gutter={16}>
        {pollCards.map((c, index) => {
          return (
            <div key={index} style={{ minWidth: 400 }}>
              <Col>
                <div style={{ marginTop: 15 }}>
                  <PollCard
                    pollMaker={c.pollMaker}
                    description={c.Description}
                    isLogged={isLogged}
                    options={c.Options}
                    title={c.Title}
                    timeRemainning={c.Time}
                    submited={c.Submited}
                  />
                </div>
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default Dashboard;
