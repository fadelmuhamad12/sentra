import { IconLocation } from '../../assets/images'
import { Card, Col, Image, Row, Space, Typography } from 'antd'

const { Text } = Typography

const CardAddress = (props) => {
  const { userData } = props

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space size={4}>
            <Image src={IconLocation} style={{ width: 15, marginBottom: 4 }} preview={false}/>
            <Text style={{ fontWeight: 700 }}>Alamat Pengiriman : </Text>
          </Space>
          <Text> {userData?.address}</Text>
        </Col>
      </Row>
    </Card>
  )
}

export default CardAddress
