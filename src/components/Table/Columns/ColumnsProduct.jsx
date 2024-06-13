import React from "react";
import { Dropdown, Menu, Typography } from "antd";
import { MoreOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

const items = (res, openEditHandler, openModal) => (
  <Menu>
    <Menu.Item
      key="1"
      icon={<EditOutlined style={{ color: "#7A8C97" }} />}
      onClick={() => openEditHandler(res.id)}
    >
      <Text>Edit</Text>
    </Menu.Item>
    <Menu.Item
      key="2"
      icon={<DeleteOutlined style={{ color: "#7A8C97" }} />}
      onClick={() => openModal(res.id)}
    >
      <Text>Delete</Text>
    </Menu.Item>
  </Menu>
);

const ColumnsProduct = (openEditHandler, openModal) => [
  {
    width: 200,
    title: "Name",
    key: "name",
    dataIndex: "name",
    render: (text) => <Text>{text}</Text>,
  },
  {
    width: 200,
    title: "Price",
    key: "price",
    dataIndex: "price",
    render: (text) => <Text>{text}</Text>,
  },
  {
    width: 200,
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
    render: (text) => <Text>{text}</Text>,
  },
  {
    width: 200,
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text) => <Text>{text}</Text>,
  },
  {
    width: 200,
    title: "Action",
    key: "action",
    align: "center",
    render: (res) => (
      <Dropdown overlay={() => items(res, openEditHandler, openModal)} trigger={['click']}>
        <MoreOutlined style={{ cursor: "pointer" }} />
      </Dropdown>
    ),
  },
];

export default ColumnsProduct;
