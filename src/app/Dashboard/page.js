"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Link from "next/link";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const isLogged = false;
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "All Polls",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "My Polls",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Create new poll",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          {!isLogged && (
            <Link className="btn btn-danger mx-4" href={"./Login"}>
              Login
            </Link>
          )}
          {!isLogged && (
            <Link className="btn btn-danger mx-4 " href={"./Register"}>
              Register
            </Link>
          )}
          {isLogged && (
            <Link className="btn btn-danger mx-0 " href={"./Login"}>
              Logout
            </Link>
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "90vh",
            background: colorBgContainer,
          }}
        >
          All Polls
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
