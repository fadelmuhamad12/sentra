import { Card, Col, Flex, Row, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const { Text } = Typography

const CardProductRecomendation = (props) => {
  const { product } = props
  const navigate = useNavigate();


  const detailProduct = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <Card style={{ marginTop: 20 }}>
    <Row gutter={[16, 16]}>
      {product?.data?.slice(0,4).map((p) => (
        <Col xs={24} sm={12} md={8} lg={6} key={p.id}>
          <Card hoverable style={{ width: '100%', marginTop: 50 }} cover={<img src={p.image} alt={p.name}  onClick={() => detailProduct(p?.id)} />}>
            <Flex justify='center'>
              <Text strong>{p.name}</Text>
            </Flex>
          </Card>
        </Col>
      ))}
    </Row>
  </Card>
  )
}

export default CardProductRecomendation
