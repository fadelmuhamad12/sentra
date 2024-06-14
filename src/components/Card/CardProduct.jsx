import { Card, Space, Tag, Typography } from 'antd'
import { StarFilled } from '@ant-design/icons';

const { Text } = Typography;

const CardProduct = (props) => {
  const { id, name, price, rating, image, detailProduct, status } = props

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
        <Text style={{ color: 'black', fontWeight: 700 }}>{`IDR ${Number(price).toLocaleString()}`}</Text>
      </div>
      <div style={{ textAlign: 'start' }}>
        <Space size={4}>
          <StarFilled style={{ color: 'yellowgreen', marginTop: 5 }} />
          <Text style={{ color: 'grey', fontSize: 13 }}>{rating}</Text>
        </Space>
      </div>      
      <div style={{ textAlign: 'end' }}>
        <Space size={4}>
        <Tag style={{ borderRadius: 10, background: status === 'ready' ? '#6FC6FB' : 'red' }}>
            <Text style={{ color: 'white', fontSize: 13 }}>{status}</Text>
          </Tag>
        </Space>
      </div>
    </Card>
  )
}

export default CardProduct
