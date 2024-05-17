import React from 'react'
import { Col, Row, Typography } from 'antd'
import { HeaderPage } from '../Main'

const { Text } = Typography

const Home = () => {
  return (
    <Row gutter={16}>
      {/* <HeaderPage /> */}
      <Col span={24}>
        <Text>INI HOME</Text>
      </Col>
    </Row>
  )
}

export default Home
