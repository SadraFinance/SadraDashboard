import React from "react";
import { Layout, Menu, Typography, PageHeader } from "antd";
import {
  LineChartOutlined,
  FundViewOutlined,
  FundProjectionScreenOutlined,
  RadarChartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import HeaderContent from "../components/headerContent";
import logo from "../assets/logo.svg";
import MainView from "../pages/MainView";
import PortfoView from "../pages/PortfoView";
import StrategyView from "../pages/StrategyView";
import StrategyHelpView from "../pages/StrategyHelpView";
import BackTestView from "../pages/BackTestView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    showLogoTitle: true,
    index: 1,
    default: 1,
  };
  componentWillUpdate() {}

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
    this.showLogoTitle = !this.showLogoTitle;
  };
  render() {
    return (
      <Router>
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

            <Menu
              theme="dark"
              defaultSelectedKeys={[this.state.index + ""]}
              mode="inline"
            >
              <Menu.Item
                key="1"
                icon={<FundViewOutlined />}
                onClick={() => this.setState({ index: 0 })}
              >
                <Link to="/"> نمای اصلی</Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<FundProjectionScreenOutlined />}
                onClick={() => this.setState({ index: 1 })}
              >
                <Link to="/portfo"> پورتفو</Link>{" "}
                {console.log(this.state.index)}
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<RadarChartOutlined />}
                onClick={() => this.setState({ index: 2 })}
              >
                <Link to="/strategy">استراتژی‌ها</Link>
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<LineChartOutlined />}
                onClick={() => this.setState({ index: 3 })}
              >
                <Link to="/back-test"> بک‌ تست</Link>
              </Menu.Item>
              <Menu.Item
                key="5"
                icon={<QuestionCircleOutlined />}
                onClick={() => this.setState({ index: 4 })}
              >
                <Link to="/strategy-help"> راهنمای استراتژی</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="نمای اصلی"
                subTitle="تحلیلگر صدرا"
                extra={[<HeaderContent />]}
              />
            </Header>
            <div className="App-body">
              <div>
                <div>
                  <Content style={{ padding: 27 }}>
                    <Route exact path={"/"} component={MainView} />
                    <Route path={"/portfo"} component={PortfoView} />
                    <Route path={"/strategy"} component={StrategyView} />
                    <Route path={"/back-test"} component={BackTestView} />
                    <Route
                      path={"/strategy-help"}
                      component={StrategyHelpView}
                    />
                  </Content>
                </div>
              </div>
            </div>
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
      </Router>
    );
  }
}

export default BasicLayout;
