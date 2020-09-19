import React from "react";
import { Row, Col, Card } from "antd";
import StrategyStatus from "../components/strategyStatus";
import PortfoTable from "../components/portfoTable";
import PortfoData from "../portfoData.json";
import CoulmnData from "../columnData.json";

export default function PortfoView() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={11}>
          <Card hoverable title="وضعیت کلی پورتفو" className={"card-size-2"}>
            <PortfoTable
              data={PortfoData[0]["portfo"]}
              columns={CoulmnData[0]["portfo"]}
              select={true}
              x={200}
            />
          </Card>
        </Col>
        <Col span={13}>
          <Card hoverable title="جزئیات استراتژی ها" className={"card-size-2"}>
            <StrategyStatus />
          </Card>
        </Col>
      </Row>
    </>
  );
}
