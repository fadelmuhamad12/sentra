import { Button, Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

const CardTotalCart = (props) => {
  const { cartCount } = props;

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text style={{ fontWeight: 700, fontSize: 14 }}>
            Ringkasan Belanja
          </Text>
        </Col>
        <Col span={24}>
          <Text style={{ fontWeight: 700, fontSize: 14 }}>Total: </Text>
        </Col>
        <Col span={24}>
          <Text style={{ fontWeight: 700, fontSize: 14 }}>{`IDR ${Number(
            cartCount?.totalPaid
          ).toLocaleString()}`}</Text>
        </Col>
        <Col span={24}>
          <Link to="/payment">
            <Button size="small">Beli {cartCount?.totalCount}</Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default CardTotalCart;
