import { useSelector } from 'react-redux';
import { Col, Row, Typography } from 'antd'
import CardAddress from '../../components/Card/CardAddress';
import CardDetailCart from '../../components/Card/CardDetailCart';
import CardPayment from '../../components/Card/CardPayment';

const { Text } = Typography

const PaymentProduct = () => {


  const cartCount = useSelector((state) => state.product.addToCart);
  const { userData  } = useSelector((state) => state.authReducer);


  const handleBack = () => {
    window.history.back();
  }

  return (
    <div style={{ padding: '0 250px', marginTop: '50px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text onClick={handleBack} style={{ cursor: 'pointer' }}> Back </Text>
        </Col>
        <Col span={16}>
          <CardAddress userData={userData}/>
        </Col>
        <Col span={16}>
          <CardDetailCart cartCount={cartCount}/>
        </Col>
        <Col span={8}>
          <CardPayment cartCount={cartCount}/>
        </Col>
      </Row>

    </div>
  )
}

export default PaymentProduct
