import React from "react";
import { Layout, Menu, Typography, PageHeader } from "antd";
import {
  LineChartOutlined,
  FundViewOutlined,
  FundProjectionScreenOutlined,
  RadarChartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.svg";

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    showLogoTitle: true,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
    this.showLogoTitle = !this.showLogoTitle;
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <img alt="Sadra" src={logo} />
            {this.showLogoTitle ? null : (
              <Title style={{ color: "white", marginTop: "1rem" }} level={4}>
                تحلیلگر صدرا
              </Title>
            )}
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<FundViewOutlined />}>
              نمای اصلی
            </Menu.Item>
            <Menu.Item key="2" icon={<FundProjectionScreenOutlined />}>
              پورتفو
            </Menu.Item>
            <Menu.Item key="3" icon={<RadarChartOutlined />}>
              استراتژی‌ها
            </Menu.Item>
            <Menu.Item key="4" icon={<LineChartOutlined />}>
              بک‌ تست
            </Menu.Item>
            <Menu.Item key="5" icon={<QuestionCircleOutlined />}>
              راهنمای استراتژی
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <PageHeader
              className="site-page-header"
              onBack={() => null}
              title="نمای اصلی"
              subTitle="تحلیلگر صدرا"
            />
          </Header>
          <Content></Content>
          <Footer style={{ textAlign: "center" }}>
            Sadra Analysis Dashboard ©2021 Created by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sadrafinance.ir"
            >
              Sadra Group
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
