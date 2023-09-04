import { Button, Form, Input } from "antd";
import { useState } from "react";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Options = () => {
  const [pullForm, setPullForm] = useState([{ id: 1, option: "" },{ id: 2, option: "" }]);
  return (
    <div>
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
          label="About"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input the Pull",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {pullForm.map((o) => {
          return (
            <Form.Item
              label={"Option "+o.id}
              name="options"
              rules={[
                {
                  required: true,
                  message: "Please input the Options for the pull",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        })}

        <Button style={{ marginLeft: "80%" }}>Add</Button>

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
export default Options;
