import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Typography, message, Form, Input } from 'antd';
import { useDispatch } from "react-redux";
import { signUpAction } from "../../redux/actions/Auth/authAction";

const { Title } = Typography;

const CardSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    try {
      dispatch(signUpAction(values));
      message.success('User Created');
      navigate('/');
    } catch (error) {
      message.error(error.message || 'Signup failed');
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24} style={{ marginTop: 100 }}>
        <Form onFinish={onFinish}>
          <Row justify="center">
            <Card>
              <Col span={24}>
                <Link to='/'>
                  <Button size="small">
                    Back
                  </Button>
                </Link>
              </Col>
              <Col span={24}>
                <Title style={{ textAlign: 'center' }}>SENTRA</Title>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input placeholder="Username" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="phoneNumber"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="address"
                  rules={[{ required: true, message: 'Please input your address!' }]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Row justify='center'>
                  <Button size='small' type="primary" htmlType="submit">Sign Up</Button>
                </Row>
              </Col>
            </Card>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default CardSignUp;
