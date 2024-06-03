import { Card, Col, Row, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

const CardAddress = () => {
  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text>Alamat Pengiriman :</Text>
        </Col>
      </Row>
    </Card>
  )
}

export default CardAddress
