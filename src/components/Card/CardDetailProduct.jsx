import { StarFilled } from '@ant-design/icons'
import { Button, Card, Col, Flex, Image, Row, Space, Tag, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

const CardDetailProduct = (props) => { 
  const { data, subTotal, removeQuantity, addQuantity, total, handleAddToCart } = props 

  return (
    <Card>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Image src={data?.image} preview={false} />
      </Col>
      <Col span={8} style={{ marginTop: 50 }}>
        <Row gutter={16}>
          <Col span={24}>
            <Text style={{ fontWeight: 700, fontSize: 20 }}>{data?.name}</Text>
          </Col>
          <Col span={24}>
            <Space size={4}>
              <StarFilled style={{ color: 'yellowgreen', marginTop: 5 }} />
              <Text style={{ fontSize: 20, color: 'grey' }}>{data?.rating}</Text>
            </Space>
          </Col>
          <Col span={24} style={{ marginTop: 20 }}>
            <Space direction='vertical'>
              <Text style={{ fontSize: 15, fontWeight: 600 }}>Deskripsi</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>{data?.description}</Text>
            </Space>
          </Col>
          <Col span={24}>
            <Tag style={{ color: '#6FC6FB', fontSize: 14, marginTop: 10, borderRadius: 10 }}>{data?.status}</Tag>
          </Col>
        </Row>
      </Col>
      <Col span={8} style={{ marginTop: 50 }}>
        <Card>
          <Row gutter={16}>
            <Col span={24}>
              <Text style={{ fontWeight: 500, fontSize: 15 }}>Atur Jumlah Catatan</Text>
            </Col>
            <Col span={24}>
              <Space size={5}>
                <Text style={{ fontWeight: 500, fontSize: 15, cursor: 'pointer' }} onClick={removeQuantity}>-</Text>
                <Text style={{ fontWeight: 500, fontSize: 15 }}>{total}</Text>
                <Text style={{ fontWeight: 500, fontSize: 15, cursor: 'pointer' }} onClick={addQuantity}>+</Text>
              </Space>
            </Col>
            <Col span={12} style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>Total</Text>
            </Col>
            <Col span={12} style={{ marginTop: 20 }}>
              <Flex justify='flex-end'>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>{`IDR ${Number(subTotal).toLocaleString()}`}</Text>
              </Flex>
            </Col>
            <Col span={24}>
              <Flex justify='center'>
                <Button size='small' onClick={() => handleAddToCart(total)}>Add To Cart</Button>
              </Flex>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </Card>
  )
}

export default CardDetailProduct
