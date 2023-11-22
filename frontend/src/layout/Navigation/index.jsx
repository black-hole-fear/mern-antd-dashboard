import React from "react";

import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const location = useLocation();
  
  return (
    <>
      <Sider
        style={{
          zIndex: 1000,
          background: 'white',
          width: '190px'
        }}
      >
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 15L11.2286 11.2286M11.2286 11.2286C12.3129 10.1443 12.9835 8.64635 12.9835 6.99177C12.9835 3.68261 10.3009 1 6.99177 1C3.68261 1 1 3.68261 1 6.99177C1 10.3009 3.68261 12.9835 6.99177 12.9835C8.64635 12.9835 10.1443 12.3129 11.2286 11.2286Z" stroke="black"/>
          </svg>
        </div>
        <br/><br/>
        <Menu 
          defaultSelectedKeys={[location.pathname]} 
          mode="inline"
          style={{
            height: '100%',
            borderRight: 0
          }}
        >
          <Menu.Item key="/home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/reports">
            <Link to="/reports">Reports</Link>
          </Menu.Item>
          <Menu.Item key="/apartments">
            <Link to="/apartments">Apartments</Link>
          </Menu.Item>
          <Menu.Item key="/managers">
            <Link to="/managers">Managers</Link>
          </Menu.Item>
          <Menu.Item key="/reservations">
            <Link to="/reservations" />
            Reservations
          </Menu.Item>
          <Menu.Item></Menu.Item>
          <Menu.Item key="/edit-site">
            <Link to="edit-site" />
            Edit the site
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
