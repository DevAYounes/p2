"use client";
import React from "react";
import Globals from "../../../../Globals";

import { Card } from "antd";
import OptionsForms from "./OptionsForms";
import { redirect } from "next/navigation";


if(!Globals.logged){
  redirect("/Dashboard");
}
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
