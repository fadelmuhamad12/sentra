import { Button, Col, Flex, Modal, Row, Space, Typography, message } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../../redux/actions/Admin/DeleteAction';
import { listProductAction } from '../../redux/actions/ProductAction/listProductAction';

const { Text } = Typography;

const ModalDelete = ({ openModal, closeModal, productId }) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      dispatch(deleteProductAction(productId));
      message.success('Successfully deleted this product');
      dispatch(listProductAction());
      closeModal();
    } catch (error) {
      message.error(error.message || 'Failed to delete product');
    }
  };

  return (
    <Modal
      open={openModal}
      footer={null}

    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text>Are you sure you want to delete this product?</Text>
        </Col>
        <Col span={24}>
          <Flex justify='flex-end'>
            <Space>
              <Button size='small' onClick={closeModal}>Cancel</Button>
              <Button size='small' onClick={handleSubmit} >Delete</Button>
            </Space>

          </Flex>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalDelete;
