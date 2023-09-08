"use client";
import React, { useEffect, useState } from "react";
import PollCard from "./Components/PollCard";
import { Col, Row } from "antd";
import Globals from "../../../Globals";
import axios from "axios";
const BASE_URL = "http://localhost:2000/";

const Dashboard = () => {
  const [pollCards, setPollCards] = useState([]);
  var filtered;
  useEffect(() => {
    axios
      .get(BASE_URL + "getPolls/")
      .then((data) => {
        filtered = data.data.filter((f) => {
          return f.length;
        });
        for (let index = 0; index < filtered.length; index++) {
          var merged = filtered[0].concat(filtered[index]);
        }
        setPollCards(merged);

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
