import React, { useState } from "react";
import { Card, Radio, Button, Progress } from "antd";

const PollCard = (props) => {
  const isLogged = props.isLogged;

  const cardDetails = {
    pollMaker: props.pollMaker,
    description: props.description,
    options: props.options,
    title: props.title,
    timeRemainning: props.timeRemainning,
  };
  debugger;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const calcPercentage = (o, i) => {
    for (let index = 0; index < cardDetails.options.length; index++) {
      const AllVotes =
        cardDetails.options[index].votes + cardDetails.options[index + 1].votes;
      const percentage = o.votes / AllVotes;
      return parseInt(percentage * 100);

    }
  };
  return (
    <div>
      <Card
        title={cardDetails.title + " (" + cardDetails.pollMaker + ")"}
        bordered={false}
      >
        {cardDetails.description}
        <br></br>
        {isLogged && (
          <div id="loggedUsers">
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

            <Button className="btn btn-primary px-4 mt-3">Submit</Button>
          </div>
        )}
        {!isLogged && (
          <div style={{ marginTop: 30 }}>
            {cardDetails.options.map((o, i) => {
              return (
                <div>
                  {o.option}
                  <Progress percent={calcPercentage(o, i)} status="active" />
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
};
export default PollCard;
