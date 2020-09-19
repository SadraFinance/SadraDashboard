import React, { useState } from "react";
import { Button, Tabs } from "antd";
import { Row, Col } from "antd";
import ProfitChart from "../components/profitChart";
import PortfoTable from "./portfoTable";
import PortfoData from "../portfoData.json";
import ColumnData from "../columnData.json";

const data = PortfoData[0]["portfo"];
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

export default function StrategyStatus() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="نمودار سود" key="1">
          <>
            <ProfitChart
              title={data[localStorage.getItem("selectedRow") - 1].name}
              data={localStorage.getItem("selectedRow") - 1}
            />
            <Row>
              <Col span={10}></Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => setCount(count + 1)}
                  style={{ marginTop: 20 }}
                >
                  انتخاب استراتژی
                </Button>
              </Col>
              <Col span={10}></Col>
            </Row>
          </>
        </TabPane>
        <TabPane tab="سبد دارایی فعلی" key="2">
          <PortfoTable
            data={PortfoData[0]["stock"]}
            columns={ColumnData[0]["stock"]}
            select={false}
          />
        </TabPane>
        <TabPane tab="خرید و فروش امروز" key="3">
          <PortfoTable
            data={PortfoData[0]["buy-today"]}
            columns={ColumnData[0]["buy-today"]}
            select={false}
          />
        </TabPane>
        <TabPane tab="تاریخچه خرید و فروش" key="4">
          <PortfoTable
            data={PortfoData[0]["history"]}
            columns={ColumnData[0]["buy-today"]}
            select={false}
          />
        </TabPane>
      </Tabs>
    </>
  );
}
