import React from 'react'
import { Card, Space, Typography } from 'antd'
import { StarFilled } from '@ant-design/icons';

const { Text } = Typography;

const CardProduct = (props) => {
  const { id, name, price, rating, image, detailProduct } = props

  return (
    <Card
      hoverable
      style={{ width: '100%', marginTop: 50 }}
      cover={<img src={image} alt={name} />}
      onClick={() => detailProduct(id)}
    >
      <div style={{ textAlign: 'center' }}>
        <Text style={{ color: 'black' }}>{name}</Text>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Text style={{ color: 'black', fontWeight: 700 }}>Rp.{price}</Text>
      </div>
      <div style={{ textAlign: 'start' }}>
        <Space size={4}>
          <StarFilled style={{ color: 'yellowgreen', marginTop: 5 }} />
          <Text style={{ color: 'grey', fontSize: 13 }}>{rating}</Text>
        </Space>
      </div>
    </Card>
  )
}

export default CardProduct
