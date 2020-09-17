import React from "react";
import { Button, Dropdown, Menu, Tooltip } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  SwapOutlined,
  SettingOutlined,
  ExportOutlined,
  ApiTwoTone,
  ExperimentOutlined,
} from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item icon={<InfoCircleOutlined />}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        اطلاعات حساب
      </a>
    </Menu.Item>
    <Menu.Item icon={<SwapOutlined />}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        دریافت و برداشت
      </a>
    </Menu.Item>
    <Menu.Item icon={<SettingOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        تنظیمات حساب
      </a>
    </Menu.Item>
    <Menu.Item icon={<ExportOutlined />} danger>
      خروج از حساب
    </Menu.Item>
  </Menu>
);

export default class HeaderContent extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };

  render() {
    return (
      <>
        <Button type="primary" icon={<ExperimentOutlined />} key="6">
          آزمایشگاه داده
        </Button>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button
            type="text"
            href="#"
            icon={<UserOutlined />}
            onClick={(e) => e.preventDefault()}
          >
            محمد رحمانی
          </Button>
        </Dropdown>
        <Tooltip color="#52c41a" placement="bottomLeft" title="متصل به سرور">
          <Button icon={<ApiTwoTone twoToneColor="#52c41a" />} type="text" />
        </Tooltip>
      </>
    );
  }
}
