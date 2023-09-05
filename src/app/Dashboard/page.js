"use client";
import React, { useState } from "react";
import PollCard from "./Components/PollCard";
import { Col, Row } from "antd";
const Dashboard = (props) => {
  const isLogged = false;

  const [pollCards, setPollCards] = useState([
    {
      pollMaker: "Ahmed Younis",
      description: "In your opinion What is the best game",
      options: [
        { option: "God of war", value: 1 },
        { option: "Assassin's creed", value: 2 },
      ],
    },
    {
      pollMaker: "A",
      description: "In your opinion What is the best Movie",
      options: [
        { option: "Saw", value: 1 },
        { option: "The nun", value: 2 },
      ],
    },
    {
      pollMaker: "B",
      description: "In your opinion What is the best Cinema",
      options: [
        { option: "First one", value: 1 },
        { option: "Second one", value: 2 },
      ],
    },
    {
      pollMaker: "z",
      description: "In your opinion What is the best Cinema",
      options: [
        { option: "v", value: 1 },
        { option: "b", value: 2 },
      ],
    },
    {
      pollMaker: "d",
      description: "In your opinion What is the best Cinema",
      options: [
        { option: "v", value: 1 },
        { option: "b", value: 2 },
      ],
    },
    {
      pollMaker: "f",
      description: "In your opinion What is the best Cinema",
      options: [
        { option: "v", value: 1 },
        { option: "b", value: 2 },
      ],
    },
    {
      pollMaker: "j",
      description: "In your opinion What is the best Cinema",
      options: [
        { option: "v", value: 1 },
        { option: "b", value: 2 },
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
            <Col span={8}>
              <div style={{marginTop:15}}><PollCard
                pollMaker={c.pollMaker}
                description={c.description}
                isLogged={isLogged}
                options={c.options}
              /></div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Dashboard;
