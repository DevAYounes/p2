"use client";
import React, { useState } from "react";
import PollCard from "./Components/PollCard";
import { Col, Input, Row } from "antd";
import Globals from "../../../Globals";
const Dashboard = () => {
  const [a,setA] = useState([{ t: "1" }, { t: "2" }, { t: "3" }]);
  const isLogged = Globals.logged;

  const [pollCards, setPollCards] = useState([
    {
      Title: "Best game",
      pollMaker: "Ahmed Younis",
      Description: "In your opinion What is the best game",
      Time: 3 + "h",
      Options: [
        { option: "God of war", value: 1, votes: 51 },
        { option: "Assassin's creed", value: 2, votes: 5 },
      ],
    },
    {
      Title: "Best Movie",
      pollMaker: "Mohammad Ragy",
      Description: "In your opinion What is the best game",
      Time: 22 + "h",
      Options: [
        { option: "God of war", value: 1, votes: 10 },
        { option: "Assassin's creed", value: 2, votes: 4 },
      ],
    },
    {
      Title: "Best Match",
      pollMaker: "Mohammad Salah",
      Description: "In your opinion What is the best game",
      Time: 4 + "h",
      Options: [
        { option: "God of war", value: 1, votes: 5 },
        { option: "Assassin's creed", value: 2, votes: 11 },
      ],
    },
    {
      Title: "Best Match",
      pollMaker: "Mohammad Salah",
      Description: "In your opinion What is the best game",
      Time: 4 + "h",
      Options: [
        { option: "God of war", value: 1, votes: 5 },
        { option: "Assassin's creed", value: 2, votes: 11 },
      ],
    },
  ]);
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
            <div style={{ minWidth: 400 }}>
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
