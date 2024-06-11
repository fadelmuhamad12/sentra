import dayjs from "dayjs"
import {  Dropdown, Menu, Typography } from "antd"
// import { numberTable } from '../../../utils/numberTable'
import { MoreOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";


const { Text } = Typography

const items = (record, modalDelete, showEditDrawer) => (
  <Menu
    style={{ width: 150 }}
    items={[
      {
        key: "1",
        icon: <EditOutlined style={{ color: "#7A8C97" }} />,
        // onClick: () => showEditDrawer(record.id),
        label: <Text type="gray-08">Edit</Text>,
      },
      {
        key: "2",
        icon: <DeleteOutlined style={{ color: "#7A8C97" }} />,
        // onClick: () => modalDelete(record.id, record.name),
        label: <Text type="gray-08">Delete</Text>,
      },
    ]}
  />
);

const ColumnsProduct = (page, pageSize) => [
  // {
  //   width: 70,
  //   title: "No",
  //   key: 'no',
  //   render: (record, key, index) => (
  //     <Text ellipsis={true} style={{ width: "100%" }}>
  //       <Tooltip title={numberTable(index, page, pageSize)}>
  //         {numberTable(index, page, pageSize)}
  //       </Tooltip>
  //     </Text>
  //   ),
  // },
  {
    width: 200,
    title: "Name",
    key: 'name',
    render: (res) => (
      <Text>{res?.name}</Text>
    )
    
  },
  {
    width: 200,
    title: "Price",
    key: 'price',
    render: (res) => (
      <Text>{res?.price}</Text>
    )
    
  },
  {
    width: 200,
    title: "Quantity",
    key: 'qty',
    render: (res) => (
      <Text>{res?.quantity}</Text>
    )
  },
  {
    width: 200,
    title: "Status",
    key: 'status',
    render: (res) => (
      <Text>{res?.status}</Text>
    )
  },
  {
    width: 200,
    title: "action",
    key: 'action',
    align: 'center',
    fixed: 'right',
    render: (res) => (
     <Dropdown
     dropdownRender={() => items()}
     >
      <MoreOutlined style={{ cursor: 'pointer' }}/>
     </Dropdown>
    )
  },
]

export default ColumnsProduct
