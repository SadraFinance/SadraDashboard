import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  LineChartOutlined,
  FundViewOutlined,
  FundProjectionScreenOutlined,
  RadarChartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import logo from "../logo.svg";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <img
            style={{ padding: 8 }}
            height="80px"
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<FundViewOutlined />}>
              نمای اصلی
            </Menu.Item>
            <Menu.Item key="2" icon={<FundProjectionScreenOutlined />}>
              پورتفو
            </Menu.Item>
            <Menu.Item key="2" icon={<RadarChartOutlined />}>
              استراتژی‌ها
            </Menu.Item>
            <Menu.Item key="2" icon={<LineChartOutlined />}>
              بک‌ تست
            </Menu.Item>
            <Menu.Item key="3" icon={<QuestionCircleOutlined />}>
              راهنمای استراتژی
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content></Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
