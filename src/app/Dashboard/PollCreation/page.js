"use client";
import React from "react";
import { Button, Form, Input, Card } from "antd";
import OptionsForms from "./OptionsForms";

const PollCreation = () => {
  return (
    <div>
      <Card style={{ width: 500, padding: 10 }}>
        <div style={{ fontFamily: "fantasy", fontSize: "200%" }}>
          Create New{" "}
          <div style={{ color: "red", display: "inline-block" }}>Pull</div>
        </div>
        <div style={{ marginTop: 30 }}>
          <OptionsForms />
        </div>
      </Card>
    </div>
  );
};
export default PollCreation;
