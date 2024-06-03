import { Card, Col, Image, Row, Space, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

const CardDetailCart = (props) => {
  const { cartCount } = props

  return (
    <Card>
      <Row gutter={16}>
        {cartCount?.items?.map((item) => (
          <>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Image src={item?.image} preview={false} style={{ width: '270px' }} />
                </Col>
                <Col span={8}>
                  <Space direction="vertical">
                    <Text style={{ fontWeight: 500, fontSize: 15 }}>{item?.name}</Text>
                    <Text style={{ fontWeight: 500, fontSize: 12 }}>quantity: {item?.quantity}</Text>
                  </Space>
                </Col>
                <Col span={8}>
                  <Text style={{ fontWeight: 500, fontSize: 15 }}>{`IDR ${Number(item?.totalPrice).toLocaleString()}`}</Text>
                </Col>
              </Row>
            </Col>
          </>
        ))}
      </Row>
    </Card>
  )
}

export default CardDetailCart
