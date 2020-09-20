import React from "react";
import {
  Modal,
  Card,
  Rate,
  Row,
  Col,
  Select,
  Button,
  Space,
  Statistic,
} from "antd";
import "../App.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "21/1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "21/2",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "21/3",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "21/4",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const { Option, OptGroup } = Select;

const addStrategy = {
  title: "افزودن استراتژی",
  content: (
    <>
      <br></br>
    </>
  ),
};

export default function MainView() {
  const [modal] = Modal.useModal();

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            title="استراتژی شماره یک"
            extra={
              <div>
                <Statistic title="کاربران فعال" value={112893} />
                <Rate defaultValue={3.5} />
              </div>
            }
          >
            <Space>
              <Select style={{ width: 200 }} placeholder="انتخاب استراتژی">
                <OptGroup label="شخصی">
                  <Option value="jack">استراتژی ۱</Option>
                  <Option value="lucy">استراتژی ۲</Option>
                </OptGroup>
                <OptGroup label="دیگران">
                  <Option value="Yiminghe">استراتژی ۳</Option>
                </OptGroup>
              </Select>
              <Button
                type="primary"
                onClick={() => {
                  modal.confirm(addStrategy);
                }}
                icon={<PlusOutlined />}
              >
                افزودن استراتژی
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card hoverable title="وضعیت استراتژی"></Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <Card hoverable title="جزییات استراتژی">
            {" "}
            <AreaChart
              width={700}
              height={300}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="linear"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </Card>
        </Col>
      </Row>
    </>
  );
}
