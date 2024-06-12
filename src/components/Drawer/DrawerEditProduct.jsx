import { Button, Col, Drawer, Flex, Form, Input, Row, Select } from "antd";
import PropTypes from "prop-types";

const DrawerEditProduct = (props) => {
  const { openEdit, closeEdit } = props;

  return (
    <Drawer open={openEdit} onClose={closeEdit} title="Edit" width={556}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item label="Product Name" labelAlign="vertical">
            <Input placeholder="Input Product Name" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Image" labelAlign="vertical">
            <Input placeholder="Input Image" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Price" labelAlign="vertical">
            <Input placeholder="Input Price" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Product Name" labelAlign="vertical">
            <Input placeholder="Input Product Name" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Description" labelAlign="vertical">
            <Input placeholder="Input Description" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select the status!" }]}
          >
            <Select placeholder="Select Status">
              <Option value="ready">Ready</Option>
              <Option value="soldout">Soldout</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Quantity" labelAlign="vertical">
            <Input placeholder="Input Quantity" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Flex justify="flex-end">
            <Button size="small">Create</Button>
          </Flex>
        </Col>
      </Row>
    </Drawer>
  );
};
DrawerEditProduct.propTypes = {
  openEdit: PropTypes.bool,
  closeEdit: PropTypes.bool,
};

export default DrawerEditProduct;
