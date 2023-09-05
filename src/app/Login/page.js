"use client";
import axios from "axios";
import "./Login.css";
import { useRouter } from "next/navigation";
import { Button, Checkbox, Form, Input, Card } from "antd";
import Globals from "../../../Globals";

const login = () => {
  const url = "http://localhost:2000/";
  const router = useRouter();
  const onFinish = (values) => {
    {
      /* .env doesn't work */
      /* const BASE_URL = process.env.BASE_URL;*/
    }
    axios
      .post(url + "users/login", values)
      .then(function (response) {
        console.log(response);
        Globals.logged = true;
        router.push("/Dashboard");
      })
      .catch(function (error) {
        console.log(error);
        alert("Email/Password is wrong please try again");
      });
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="c1">
      <div className="cf">
        <Card
          title="Login"
          style={{ width: 500, height: 310, marginTop: "20%" }}
        >
          <Form
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
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 15,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                className="mx-2"
                onClick={() => {
                  router.push("./Dashboard");
                }}
              >
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default login;
