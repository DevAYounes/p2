import { Button, Form, Input, DatePicker } from "antd";
import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
const BASE_URL = "http://localhost:2000/";
const { RangePicker } = DatePicker;

{
  /*Start of Component*/
}
const OptionsForms = () => {
  var date1 = new Date();
  var date2 = new Date("09/20/2023");
  var Difference_In_Time = date2.getTime() - date1.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var intTime = parseInt(Difference_In_Days) + 1;
  console.log("Total number of days between dates  <br>" + intTime);

  var token = localStorage.getItem("UserToken");
  var decoded = jwt_decode(token);
  var email = decoded.subject.email;

  const onFinish = (values) => {
    const namedData = values;
    var TheDate = new Date(namedData.Time);
    namedData.Time=TheDate.toLocaleString().split(',')[0]
    namedData.Options = pullForm;
    namedData.pollMaker = email;

    axios.post(BASE_URL + "addPolls/" + email, namedData).then((res) => {
      console.log("Success:", res);
      toast.success("Successfully Added your Poll!");
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [pullForm, setPullForm] = useState([
    { value: 1, votes: 0, submited: false, option: "" },
    { value: 2, votes: 0, submited: false, option: "" },
  ]);

  const addOption = () => {
    setPullForm((current) => [
      ...current,
      {
        value: parseInt(Math.random() * 2000),
        votes: 0,
        submited: false,
        option: "",
      },
    ]);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Form
        disabled={false}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="Title"
          rules={[
            {
              required: true,
              message: "Please input the Pull",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="Description"
          rules={[
            {
              required: true,
              message: "Please input the Pull description",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ends in"
          name="Time"
          rules={[
            {
              required: true,
              message: "Please input the Pull End-time",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        {pullForm.map((o, i) => {
          return (
            <Form.Item
              key={i}
              label="Option"
              rules={[
                {
                  required: true,
                  message: "Please input the Pull time",
                },
              ]}
            >
              <Input
                onChange={(c) => {
                  o.option = c.target.value;
                }}
              />
            </Form.Item>
          );
        })}

        <Button
          onClick={() => {
            addOption();
          }}
          style={{ marginLeft: "80%" }}
        >
          Add
        </Button>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button style={{ marginTop: 30 }} type="primary" htmlType="submit">
            Submit Pull
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default OptionsForms;
