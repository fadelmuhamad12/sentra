import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, Col, Drawer, Flex, Form, Input, Row, Select, message } from "antd";
import { createProductAction } from "../../redux/actions/Admin/CreateAction";
import { listProductAction } from "../../redux/actions/ProductAction/listProductAction";


const DrawerCreateProduct = (props) => {
  const { openCreate, closeCreate, loading } = props;
  const [form] = Form.useForm(); 
  const dispatch = useDispatch()


  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      dispatch(createProductAction(values));
      if (!loading) {
        message.success({ message: 'Product created successfully!' });
        dispatch(listProductAction())
        closeCreate();
      }
    } catch (err) {
      console.error('Validation Failed:', err);
    }
  };

  return (
    <Drawer
    open={openCreate}
    onClose={closeCreate}
    title="Create Product"
    width={556}
  >
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input placeholder="Input Product Name" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="image"
            label="Image"
            rules={[{ required: true, message: 'Please input the image URL!' }]}
          >
            <Input placeholder="Input Image" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <Input placeholder="Input Price" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
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
              <Select.Option value="ready">Ready</Select.Option>
              <Select.Option value="soldout">Sold Out</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please input the quantity!' }]}
          >
            <Input placeholder="Input Quantity" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="rating"
            label="Rating"
            rules={[{ required: true, message: 'Please input the Rating!' }]}
          >
            <Input placeholder="Input Rating" allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Flex justify="flex-end">
              <Button type="primary" htmlType="submit" size="small">
                Create
              </Button>
            </Flex>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </Drawer>
  );
};

DrawerCreateProduct.propTypes = {
  openCreate: PropTypes.bool,
  closeCreate: PropTypes.bool,
  loading: PropTypes.bool,

};

export default DrawerCreateProduct;
