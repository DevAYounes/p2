import React, { useState } from "react";
import { Card, Radio, Button } from "antd";

const PollCard = (props) => {
  const isLogged = props.isLogged;

  const cardDetails = {
    pollMaker: props.pollMaker,
    description: props.description,
    options: props.options,
  };
  debugger;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Card title={cardDetails.pollMaker} bordered={false}>
        {cardDetails.description}
        <br></br>
        <div style={{ marginTop: 30 }}>
          <Radio.Group onChange={onChange} value={value}>
            {cardDetails.options.map((o) => {
              return (
                <div style={{ display: "block" }}>
                  <Radio value={o.value}>{o.option}</Radio>
                </div>
              );
            })}
          </Radio.Group>
        </div>
        <br></br>
        {isLogged && (
          <Button className="btn btn-primary px-4 mt-3">Submit</Button>
        )}
      </Card>
    </div>
  );
};
export default PollCard;
