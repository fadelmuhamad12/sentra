import { Button, Col, Result, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import CardDetailCart from "../../components/Card/CardDetailCart";
import CardTotalCart from "../../components/Card/CardTotalCart";
import { Link } from "react-router-dom";

const CartProduct = () => {
  const { Text } = Typography;

  const cartCount = useSelector((state) => state.product.addToCart);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div style={{ padding: "0 250px" }}>
      {cartCount?.items.length === 0 ? (
        <Result
          status="404"
          title="Your Cart Is Empty"
          subTitle="You Can See Your Cart After Add Product"
          extra={
            <Link to="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      ) : (
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Text onClick={handleBack} style={{ cursor: "pointer" }}>
              {" "}
              Back{" "}
            </Text>
          </Col>
          <Col span={18}>
            <CardDetailCart cartCount={cartCount} />
          </Col>
          <Col span={6}>
            <CardTotalCart cartCount={cartCount} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CartProduct;
