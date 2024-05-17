import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Flex, Layout, Row, Typography } from 'antd'

const { Text } = Typography

const HeaderPage= () => {
  return (
    <Layout.Header style={{ background: 'black', height: 81, padding: 0, display: 'flex', alignItems: 'center', marginBottom: 40 }}>
    <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Link to='/homepage'>
            <Text className='fs-20 fw-700' style={{ color: '#FFFFFF' }}>FORUM DISKUSI DICODING</Text>
          </Link>
        </Col>
        <Col span={16} style={{ marginTop: 15 }}>
          <Flex justify='flex-end'>
            <Button onClick={signOutHandler} size='small'>Sign Out</Button>
          </Flex>
        </Col>
      </Row>
    </div>
  </Layout.Header>
  )
}

export default HeaderPage
