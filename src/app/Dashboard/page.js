"use client";
import React, { useState } from "react";
import PollCard from "./Components/PollCard";
import { Col, Row } from "antd";
const Dashboard = () => {
  const isLogged = false;

  const [pollCards, setPollCards] = useState([
    {
      title: "Best game",
      pollMaker: "Ahmed Younis",
      description: "In your opinion What is the best game",
      timeRemainning: 10 + "h",
      options: [
        { option: "God of war", value: 1 ,votes:5},
        { option: "Assassin's creed", value: 2 ,votes:10},
      ],
    },
    {
      title: "Best movie",
      pollMaker: "A",
      description: "In your opinion What is the best Movie",
      timeRemainning: 5 + "h",
      options: [
        { option: "Saw", value: 1,votes:18 },
        { option: "The nun", value: 2 ,votes:16},
      ],
    },
    {
      title: "Best Cinema",
      pollMaker: "B",
      description: "In your opinion What is the best Cinema",
      timeRemainning: 6 + "h",
      options: [
        { option: "First one", value: 1 ,votes:10},
        { option: "Second one", value: 2 ,votes:41},
      ],
    },
    {
      title: "Best game",
      pollMaker: "z",
      description: "In your opinion What is the best Cinema",
      timeRemainning: 1 + "h",
      options: [
        { option: "v", value: 1 ,votes:5},
        { option: "b", value: 2,votes:6 },
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
              <div style={{ marginTop: 15 }}>
                <PollCard
                  pollMaker={c.pollMaker}
                  description={c.description}
                  isLogged={isLogged}
                  options={c.options}
                  title={c.title}
                  timeRemainning={c.timeRemainning}
                  
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Dashboard;
