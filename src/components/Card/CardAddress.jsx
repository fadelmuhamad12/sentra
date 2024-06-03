import React from 'react'
import { IconLocation } from '../../assets/images'
import { Card, Col, Image, Row, Space, Typography } from 'antd'

const { Text } = Typography

const CardAddress = () => {
  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space size={4}>
            <Image src={IconLocation} style={{ width: 15, marginBottom: 4 }} />
            <Text style={{ fontWeight: 700 }}>Alamat Pengiriman : </Text>
          </Space>
          <Text> Jl.menteng wadas timur 3 rt7. Rw9 no.23 kelurahan:pasar manggis kecamatan: setiabudi Jaksel, Setiabudi, Jakarta Selatan, DKI Jakarta, 6281284713934</Text>
        </Col>
      </Row>
    </Card>
  )
}

export default CardAddress
