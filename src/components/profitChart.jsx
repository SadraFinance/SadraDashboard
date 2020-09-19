import React from "react";
import { Bar } from "ant-design-pro/lib/Charts";

const salesData = [[], [], []];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
for (let i = 0; i < 30; i += 1) {
  salesData[0].push({
    x: `${i + 1}`,
    y: Math.floor(Math.random(getRandomInt(4)) * 1000) + 200,
  });
}
for (let i = 0; i < 30; i += 1) {
  salesData[1].push({
    x: `${i + 1}`,
    y: Math.floor(Math.random(getRandomInt(4)) * 1000) + 200,
  });
}

for (let i = 0; i < 30; i += 1) {
  salesData[2].push({
    x: `${i + 1}`,
    y: Math.floor(Math.random(getRandomInt(4)) * 1000) + 200,
  });
}
export default function ProfitChart(props) {
  return <Bar height={310} title={props.title} data={salesData[props.data]} />;
}
