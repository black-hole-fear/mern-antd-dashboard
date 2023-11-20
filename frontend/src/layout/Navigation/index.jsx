import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="logo" />
        <br/><br/>
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/reports">Reports</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/apartments">Apartments</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/managers">Managers</Link>
          </Menu.Item>
          <Menu.Item key="31">
            <Link to="/reservations" />
            Reservations
          </Menu.Item>
          <Menu.Item></Menu.Item>
          <Menu.Item key="41">
            <Link to="edit-site" />
            Edit the site
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
