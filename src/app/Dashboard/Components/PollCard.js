import React, { useState } from "react";
import { Card, Radio, Button, Progress } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import Globals from "../../../../Globals";

const BASE_URL = "http://localhost:2000/";
const PollCard = (props) => {
  const router=useRouter()
  const isLogged = props.isLogged;

  
  const [cardDetails,setcardDetails]=useState({
    pollMaker: props.pollMaker,
    description: props.description,
    options: props.options,
    title: props.title,
    timeRemainning: props.timeRemainning,
    submited: props.submited,
  })

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target);
    setValue(e.target.value);
  };
  const submitVote = () => {
    axios
      .post(BASE_URL + "submit/" + value + "/" + cardDetails.title)
      .then((r) => {
        console.log(r.data[0]);
        router.push("/")
        Globals.logged=false;
      })
      .catch((e) => {
        console.log(e);
      });
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
            <div>
              <div style={{ marginTop: 30 }}>
                <Radio.Group onChange={onChange} value={value}>
                  {cardDetails.options.map((o, i) => {
                    return (
                      <div key={i} style={{ display: "block" }}>
                        <Radio  value={o.option}>{o.option}</Radio>
                      </div>
                    );
                  })}
                </Radio.Group>
              </div>
            </div>
            <br></br>
            <div className="btn disabled btn-warning">
              Ends in {cardDetails.timeRemainning}
            </div>
            <Button

              onClick={() => {
                submitVote();

              }}
              className="btn btn-primary px-3 py-1 mt-4"
              style={{ marginLeft: 125 }}
            >
              Submit
            </Button>
          </div>
        )}
        {!isLogged && (
          <div style={{ marginTop: 30 }}>
            {cardDetails.options.map((o, i) => {
              return (
                <div key={i}>
                  {o.option}
                  <Progress percent={calcPercentage(o, i)} status="active" />
                </div>
              );
            })}
            <div className="btn disabled btn-warning mt-1">
              Ends in {cardDetails.timeRemainning}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
export default PollCard;
