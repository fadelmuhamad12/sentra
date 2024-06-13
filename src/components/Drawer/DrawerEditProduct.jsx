import React, { useEffect } from 'react';
import { Button, Col, Drawer, Form, Input, Row, Select, message } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../../redux/actions/Admin/EditAction';
import { listProductAction } from '../../redux/actions/ProductAction/listProductAction';

const DrawerEditProduct = (props) => {
  const { openEdit, closeEdit } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { loading, data } = useSelector((state) => state.product.detail);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        name: data.name,
        image: data.image,
        price: data.price,
        description: data.description,
        status: data.status,
        quantity: data.quantity,
        rating: data.rating,
      });
    }
  }, [data, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      dispatch(editProductAction(data?.id, values, () => {
        message.success('Edit Product Successfully');
        closeEdit();
        dispatch(listProductAction());
      }));
    } catch (error) {
      console.error('Validation Failed:', error);
    }
  };

  return (
    <Drawer open={openEdit} onClose={closeEdit} title="Edit" width={556}>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
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
              rules={[{ required: true, message: 'Please select the status!' }]}
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
              <div style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit" size="small" loading={loading}>
                  Save
                </Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

DrawerEditProduct.propTypes = {
  openEdit: PropTypes.bool,
  closeEdit: PropTypes.func,
};

export default DrawerEditProduct;
