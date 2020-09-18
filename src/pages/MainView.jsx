import React from "react";
import { Card, Row, Col } from "antd";
import * as TradinView from "../components/tradingView";

export default function MainView() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card hoverable title="وضعیت کلی بازار">
            <TradinView.Overall />
          </Card>
        </Col>
        <Col span={16}>
          <Card hoverable title="نمودار مقایسه‌ای ارز">
            <TradinView.Forex />
          </Card>
        </Col>
      </Row>
    </>
  );
}
