import { StarFilled } from '@ant-design/icons'
import { Button, Card, Col, Flex, Image, Row, Space, Tag, Typography } from 'antd'

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
            <Col span={24} style={{ marginTop: 10 }}>
              <Tag style={{ borderRadius: 10, background: data?.status === 'ready' ? '#6FC6FB' : 'red', marginLeft: -6 }}>
                <Text style={{ color: 'white', fontSize: 13 }}>{data?.status}</Text>
              </Tag>          
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ marginTop: 50 }}>
          <Card>
            <Row gutter={16}>
              <Col span={12} style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>Harga</Text>
              </Col>
              <Col span={12} style={{ marginTop: 20 }}>
                <Flex justify='flex-end'>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}>{`IDR ${Number(data?.price).toLocaleString()}`}</Text>
                </Flex>
              </Col>
              <Col span={24}>
                <Flex justify='center'>
                  <Button size='small' onClick={() => handleAddToCart(subTotal)} disabled={data?.status === 'soldout' ? true : false}>Add To Cart</Button>
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
