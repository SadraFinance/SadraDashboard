import React, { useState } from "react";
import { Table } from "antd";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    localStorage.setItem("selectedRow", selectedRowKeys);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

export default function PortfoTable(props) {
  const [selectionType] = useState("radio");
  return (
    <Table
      rowSelection={
        props.select && {
          type: selectionType,
          ...rowSelection,
        }
      }
      columns={props.columns}
      dataSource={props.data}
      scroll={{ x: 400, y: 700 }}
    />
  );
}
