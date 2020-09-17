import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

export default function loading() {
  return (
    <div>
      <Spin indicator={antIcon} />
    </div>
  );
}
