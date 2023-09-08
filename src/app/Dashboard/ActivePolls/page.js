"use client";
import React, { useEffect, useState } from "react";
import PollCard from "../Components/PollCard";
import { Col, Row } from "antd";
import Globals from "../../../../Globals";
import axios from "axios";
import jwt_decode from "jwt-decode";
const BASE_URL = "http://localhost:2000/";

const ActivePolls = () => {
    var token = localStorage.getItem("UserToken");
    var decoded = jwt_decode(token);
    var email = decoded.subject.email;
  const [pollCards, setPollCards] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "getActivePolls/"+email)
      .then((data) => {
        console.log(data.data);
        setPollCards(data.data[0]);
      })
      .catch((error) => {
        console.log(err);
      });
  }, []);

  const isLogged = Globals.logged;

  return (
    <div>
      <span
        className="form-label p-3"
        style={{ fontFamily: "fantasy", fontSize: "x-large" }}
      >
        Active polls
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
                    isLogged={true}
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
export default ActivePolls;
