import axios from 'axios'
import { HeaderPage } from '../Main'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Row, Typography, Image, Flex, Button, Modal } from 'antd'

const { Text } = Typography

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:2000/products')
      .then(response => {
        setDatas(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [selectedProduct]);

  const getProduct = (productId) => {
    axios.get(`http://localhost:2000/product/${productId}`)
      .then(response => {
        setSelectedProduct(response.data);
        setIsModalVisible(true); 
      })
      .catch(error => {
        console.error('Error fetching product detail:', error);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false); 
  };

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Flex justify='start'>
          <Link to='/'>
            <Button>
              Back
            </Button>
          </Link>
        </Flex>
      </Col>
      <Col span={24}>
        <Flex justify='center'>
          <Text>Product List</Text>
        </Flex>
      </Col>
      <Col span={24}>
        {datas.map(item => (
          <div key={item.id}>
            <Text onClick={() => getProduct(item.id)} style={{ cursor: 'pointer' }}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Image src={item.image} style={{ width: 250 }} />
          </div>
        ))}
      </Col>
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        title={selectedProduct && selectedProduct.name} 
        footer={null}>
        {selectedProduct && (
          <>
            <Text>{selectedProduct.description}</Text>
            <Image src={selectedProduct.image} style={{ width: 250 }} />
          </>
        )}
      </Modal>
    </Row>
  );
}

export default Home;
