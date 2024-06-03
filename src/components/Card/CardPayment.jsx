import React, { useState } from 'react'
import ModalPayment from '../Modal/ModalPayment'
import { Button, Card, Col, Divider, Flex, Row, Typography } from 'antd'

const { Text } = Typography

const CardPayment = (props) => {
  const { cartCount } = props
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Text color='grey'>Total Harga ({cartCount?.totalCount} barang)</Text>
        </Col>
        <Col span={12}>
          <Flex justify='flex-end'>
            <Text color='grey'>{`IDR ${Number(cartCount?.totalPaid).toLocaleString()}`}</Text>
          </Flex>
        </Col>
        <Col span={12}>
          <Text color='grey'>Total Discount% </Text>
        </Col>
        <Col span={12}>
          <Flex justify='flex-end'>
            <Text color='grey'>{`IDR ${Number(0).toLocaleString()}`}</Text>
          </Flex>
        </Col>
        <Divider />
        <Col span={24}>
          <Button size='small' onClick={openModal}>Pilih Pembayaran</Button>
        </Col>
      </Row>
      {modal && <ModalPayment open={modal} onCancel={closeModal} cartCount={cartCount}/>}
    </Card>
  )
}

export default CardPayment
