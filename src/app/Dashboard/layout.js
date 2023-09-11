"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Globals from "../../../Globals";

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

  const isLogged = Globals.logged;

  const router = useRouter();

  const onSelect = (e) => {
    switch (e.key) {
      case "1":
        router.push("/Dashboard");
        break;
      case "2":
        router.push("/Dashboard/PollCreation");
        break;
      case "3":
        if (isLogged) {
          router.push("/Dashboard/PollCreation");
        } else {
          router.push("/Login");
        }
        break;
      case "4":
        if (isLogged) {
          router.push("/Dashboard/PollCreation");
        } else {
          router.push("/Login");
        }
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
              icon: <UploadOutlined />,
              label: "Active Polls",
            },
            {
              key: "3",
              icon: <VideoCameraOutlined />,
              label: "My Polls",
              danger: !isLogged,
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Create new poll",
              danger: !isLogged,
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
            <Link
              className="btn btn-danger mx-4"
              replace={true}
              href={"/Login"}
            >
              Login
            </Link>
          )}
          {!isLogged && (
            <Link
              className="btn btn-danger mx-1 "
              replace={true}
              href={"./Register"}
            >
              Register
            </Link>
          )}

          {isLogged && (
            <Link
              onClick={() => {
                Globals.logged = !Globals.logged;
                localStorage.clear()
              }}
              className="btn btn-danger mx-0 "
              replace={true}
              href={"./Login"}
            >
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
