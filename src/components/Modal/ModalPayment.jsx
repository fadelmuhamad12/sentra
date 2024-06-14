import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button, Radio, Divider, Alert, Row, Col, Typography, Switch, message, Flex } from 'antd';

const { Title, Text } = Typography;

const ModalPayment = (props) => {
  const { open, onCancel, cartCount } = props;
  const navigate = useNavigate();

  const [isSwitch, setIsSwitch] = useState(false);
  const [isSwitchDana, setIsSwitchDana] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSwitchHandler = () => {
    setIsSwitch(!isSwitch);
  };

  const onSwitchDanaHandler = () => {
    setIsSwitchDana(!isSwitchDana);
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:2002/product/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartCount.items }),
      });

      const data = await response.json();

      if (response.ok) {
        message.success('Payment Successfully');
        navigate('/payment-success');
      } else {
        message.error(data.message || 'Payment failed');
      }
    } catch (error) {
      message.error('An error occurred while processing the payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={open}
      onCancel={onCancel}
      footer={null}
      width={400}
    >
      <Row gutter={16} style={{ padding: '20px' }}>
        <Col span={24}>
          <Flex justify='center'>
            <Title level={4}>Pembayaran</Title>
          </Flex>
          <Divider />
        </Col>

        <Col span={16}>
          <Title level={5}>Dana (Rp18.812)</Title>
        </Col>
        <Col span={8} style={{ marginTop: 27 }}>
          <Flex justify='flex-end'>
            <Switch value={isSwitchDana} onClick={onSwitchDanaHandler} />
          </Flex>
        </Col>

        <Col span={16}>
          <Title level={5}>GoPay (Rp8.812)</Title>
        </Col>
        <Col span={8} style={{ marginTop: 27 }}>
          <Flex justify='flex-end'>
            <Switch value={isSwitch} onClick={onSwitchHandler} />
          </Flex>
        </Col>

        <Col span={24}>
          {isSwitchDana && <Alert message="Oops, saldo kurang. Top-up Sekarang" type="warning" showIcon />}
        </Col>
        <Col span={24}>
          {isSwitch && <Alert message="Oops, saldo kurang. Top-up Sekarang" type="warning" showIcon />}
        </Col>

        <Col span={24}>
          <Divider />
          <Title level={5}>Metode pembayaran</Title>
        </Col>

        <Col span={24}>
          <Radio.Group defaultValue="BRIVA" style={{ width: '100%' }}>
            <Radio value="BRIVA" style={{ display: 'block', marginBottom: '10px' }}>
              BRIVA
            </Radio>
            <Radio value="MandiriVirtualAccount" style={{ display: 'block', marginBottom: '10px' }}>
              Mandiri Virtual Account
            </Radio>
            <Radio value="BcaVA" style={{ display: 'block' }}>
              Bca Virtual Account
            </Radio>
          </Radio.Group>
        </Col>

        <Col span={24}>
          <Divider />
          <Alert message="Yay, kamu dapat diskon Gratis Ongkir sebesar Rp20.0000 dari transaksi ini" type="success" showIcon />
        </Col>

        <Col span={24} style={{ marginTop: '20px', fontWeight: 'bold' }}>
          <Row justify="space-between">
            <Col>
              <Text>Total Tagihan</Text>
            </Col>
            <Col>
              <Text>{`IDR ${Number(cartCount?.totalPaid).toLocaleString()}`}</Text>
            </Col>
          </Row>
        </Col>

        <Col span={24} style={{ marginTop: 10 }}>
          <Button type="primary" block onClick={onSubmit} disabled={(isSwitch || isSwitchDana) || loading}>
            {loading ? 'Processing...' : 'Bayar'}
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalPayment;
