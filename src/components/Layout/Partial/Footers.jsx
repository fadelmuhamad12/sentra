import { Link } from 'react-router-dom'
import { Col, Descriptions, Divider, Grid, Image, Layout, Row, Space, Typography } from 'antd'
import { Faze, IconEmail, IconPhone, IconFacebook, IconInstagram, IconTwitter } from '../../../assets/images'

const { Text, Title } = Typography
const { useBreakpoint } = Grid

const Footer = () => {
  const { lg } = useBreakpoint()

  const items = [
    {
      key: 'Home',
      children: (
        <Link to='/'>
          <Text className='fs-16'>Home</Text>
        </Link>
      ),
    },
    {
      key: 'Produk',
      children: (
        <Link to='/'>
          <Text className='fs-16'>Produk</Text>
        </Link>
      ),
    },
    {
      key: 'Cart',
      children: (
        <Link to='/'>
          <Text className='fs-16'>Cart</Text>
        </Link>
      ),
    },
    {
      key: 'Layanan',
      children: (
        <Link to='/'>
          <Text className='fs-16'>Layanan</Text>
        </Link>
      ),
    },
    {
      key: 'Tentang Kami',
      children: (
        <Link to='/'>
          <Text className='fs-16'>Tentang Kami</Text>
        </Link>
      ),
    },
    {
      key: 'Hubungi Kami',
      children: (
        <Link to='/'>
          <Text className='fs-16'>Hubungi Kami</Text>
        </Link>
      ),
    },
  ]

  return (
    <Layout.Footer style={{ background: '#FFF', padding: 0, marginTop: 20 }}>
      <div className='container' style={{ padding: '50px 0px' }}>
        {lg ? (
          <Row gutter={[16, 16]} align='middle'>
            <Col xs={24} sm={24} md={24} lg={10}>
            </Col>
            <Col xs={24} sm={24} md={24} lg={14} style={{ justifyContent: lg && 'flex-end' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Space>
                    <Image src={IconPhone} preview={false} width={34} height={34} loading='lazy' />
                    <Text className='fs-16 fw-700'>(+62) 21 29067436</Text>
                  </Space>
                </Col>
                <Col span={8}>
                  <Space justify='center'>
                    <Image src={IconEmail} preview={false} width={34} height={34} loading='lazy' />
                    <Text className='fs-16 fw-700'>info@sentraPedia.co.id</Text>
                  </Space>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={10}>
              <div style={{ width: 500, marginLeft: 100}}>
                <Title level={5} type='primary' >
                  “The Biggest Marketplace in Indonesia”
                </Title>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={14}>
              <Descriptions
                column={4}
                title='Menu'
                items={items}
                contentStyle={{ color: '#7B7B7B', fontSize: 16 }}
              />
            </Col>
          </Row>
        ) : (
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Descriptions
                column={2}
                title='Ikuti Kami'
                items={items}
                contentStyle={{ color: '#7B7B7B', fontSize: 16 }}
              />
            </Col>
            <Col span={24}>
              <Divider />
            </Col>
            <Col span={24}>
              <Space justify='center'>
                <Image src={Faze} preview={false} width={170} height={52} loading='lazy' />
              </Space>
            </Col>
            <Col span={24}>
              <Space justify='center' style={{ textAlign: 'center' }}>
                <Text className='fw-700' type='primary'>
                  “Trust the Journey, <br /> Trust the Diagnosis”
                </Text>
              </Space>
            </Col>
            <Col span={24}>
              <Space justify='center'>
                <Space>
                  <Image src={IconPhone} preview={false} width={20} height={20} loading='lazy' />
                  <Text>(+62) 21 29067436</Text>
                </Space>
              </Space>
            </Col>
            <Col span={24}>
              <Space justify='center'>
                <Space>
                  <Image src={IconEmail} preview={false} width={20} height={20} loading='lazy' />
                  <Text>info@SentraPedia.co.id</Text>
                </Space>
              </Space>
            </Col>
          </Row>
        )}
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Title level={5}>Ikuti Kami</Title>
          <Space size="middle">
            <Image src={IconFacebook} style={{ width: 20, cursor: 'pointer' }} preview={false}/>
            <Image src={IconInstagram} style={{ width: 20, cursor: 'pointer'}} preview={false}/>
            <Image src={IconTwitter} style={{ width: 20, cursor: 'pointer' }} preview={false}/>
          </Space>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          textAlign: 'center',
          height: lg ? 56 : 72,
          alignItems: 'center',
          background: '#6FC6FB',
          justifyContent: 'center',
        }}
      >
        <div className='container'>
          <Row gutter={16}>
            <Col span={24}>
              <Text className='fs-14 white'>Copyright © SentraPedia 2024 | Designed & Development by Ravi</Text>
            </Col>
          </Row>
        </div>
      </div>
    </Layout.Footer>
  )
}

export default Footer
