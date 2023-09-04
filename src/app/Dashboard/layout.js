"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isLogged, Login] = useState(false);
  const router = useRouter();

  const onSelect = (e) => {
    switch (e.key) {
      case "1":
        router.push("/Dashboard");
        break;
      case "2":
        break;
      case "3":
        router.push("/Dashboard/PollCreation");
        break;
    }
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          onSelect={onSelect}
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
            <Link className="btn btn-danger mx-4" replace={true} href={"/Login"}>
              Login
            </Link>
          )}
          {!isLogged && (
            <Link className="btn btn-danger mx-1 " replace={true} href={"./Register"}>
              Register
            </Link>
          )}
          {isLogged && (
            <Link className="btn btn-danger mx-0 " replace={true} href={"./Login"}>
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
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
