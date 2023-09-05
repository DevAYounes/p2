"use client";
import "./Register.css";
import React from "react";
import { Card, Button, Form, Input } from "antd";
import { Image } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
export default async function Home() {


  {
    /* .env doesn't work */
    /* const BASE_URL = process.env.BASE_URL;*/
  }

  const url = "http://localhost:2000/";
  const router = useRouter();
  const onFinish = (values) => {
    axios
      .post(url + "users/register", values)
      .then(function (response) {
        console.log(response);
        router.push("/Login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="c1 ">
      <div className="register-form">
        <Card title="Register a new User">
          <Image
            preview={false}
            width={200}
            height={190}
            style={{ marginLeft: 100 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div style={{ marginTop: 30 }}>
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
                label="Full name"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  style={{ marginLeft: "70%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}
