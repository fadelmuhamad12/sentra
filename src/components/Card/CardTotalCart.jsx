import { Button, Card, Col, Flex, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Text } = Typography


const CardTotalCart = (props) => {
  const { cartCount } = props

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text style={{ fontWeight: 700, fontSize: 14 }}>Ringkasan Belanja</Text>
        </Col>
        <Col span={12}>
          <Text style={{ fontWeight: 700, fontSize: 14 }}>Total: </Text>
        </Col>
        <Col span={12}>
          <Flex justify="flex-end">
            <Text style={{ fontWeight: 700, fontSize: 14 }}>{`IDR ${Number(cartCount?.totalPaid).toLocaleString()}`}</Text>
          </Flex>
        </Col>
        <Col span={24}>
          <Link to='/payment'>
            <Button size="small">
              Beli {cartCount?.totalCount}
            </Button>
          </Link>
        </Col>
      </Row>
    </Card>
  )
}

export default CardTotalCart
