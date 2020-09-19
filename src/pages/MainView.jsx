import React from "react";
import { Card, Row, Col } from "antd";
import * as TradinView from "../components/tradingView";
import "../App.css";

export default function MainView() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card hoverable title="وضعیت کلی بازار" className={"card-size"}>
            <TradinView.Overall />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <Card hoverable title="نمودار مقایسه‌ای ارز" className={"card-size"}>
            <TradinView.Forex />
          </Card>
        </Col>
      </Row>
    </>
  );
}
