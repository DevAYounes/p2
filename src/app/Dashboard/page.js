"use client";
import React, { useState } from "react";
import PollCard from "./Components/PollCard";


const Dashboard = (props) => {
  const isLogged = true;
  debugger
  const [pollCards, setPollCards] = useState([
    {
      pollMaker: "Ahmed Younis",
      description: "In your opinion What is the best game",
      options: [
        { option: "a", value: 1 },
        { option: "b", value: 2 },
      ],
    },
    {
      pollMaker: "A",
      description: "In your opinion What is the best Movie",
      options: [
        { option: "d", value: 1 },
        { option: "z", value: 2 },
      ],
    },
    {
      pollMaker: "B",
      description: "In your opinion What is the best Cinema",
      options: [
        { option: "v", value: 1 },
        { option: "b", value: 2 },
      ],
    },
  ]);
  return (
    <div>
      <PollCard pollCards={pollCards} isLogged={isLogged} />;
    </div>
  );
};

export default Dashboard;
