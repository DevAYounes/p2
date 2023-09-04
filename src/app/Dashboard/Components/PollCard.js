import React, { useState } from "react";
import { Card, Col, Row, Radio, Button } from "antd";

const PollCard = (props) => {
  const pollCard = props.pollCards;
  const isLogged = props.isLogged;

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div isLogged={isLogged}>
      <span
        className="form-label p-3"
        style={{ fontFamily: "fantasy", fontSize: "x-large" }}
      >
        All polls
      </span>
      <Row style={{ marginTop: 40 }} gutter={16}>
        {pollCard.map((p) => {
          return (
            <Col key={p.pollMaker} span={8}>
              <Card title={p.pollMaker} bordered={false}>
                {p.description}
                <br></br>
                {p.options.map((o) => {
                  return (
                   <div>
                     <Radio.Group onChange={onChange} value={value}>
                      <Radio value={o.value}>{o.option}</Radio>
                    </Radio.Group>
                   </div>
                  );
                })}
                <br></br>
                {isLogged && (
                  <Button className="btn btn-primary px-4 mt-3">Submit</Button>
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default PollCard;
