import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpAction } from "../../redux/actions/Auth/authAction";
import { Button, Card, Col, Row, Typography, message, Form, Input, Select } from 'antd';

const { Text, Title } = Typography;

const LoginHeader = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderBottom: '5px solid #094265' }}>
      <Row justify="space-between" align="middle" style={{ padding: '20px 20px' }}>
        <Col>
          <Row align="middle">
            <Text style={{ color: '#094265', fontSize: '18px', fontWeight: 'bold', marginRight: '5px' }}>SentraPedia</Text>
            <Text style={{ color: '#000000', fontSize: '18px', fontWeight: 600 }}>Sign Up</Text>
          </Row>
        </Col>
        <Col>
          <Link to="/" style={{ color: '#094265', fontSize: '14px' }}>Butuh bantuan?</Link>
        </Col>
      </Row>
    </div>
  );
};

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
    <div>
      <LoginHeader />
      <Row justify="center" style={{ minHeight: '100vh', alignItems: 'center', backgroundColor: '#6FC6FB' }}>
        <Col>
          <Form onFinish={onFinish}>
            <Card style={{ padding: '20px 60px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
              <Title level={2} style={{ color: '#094265' }}>Sentra</Title>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Username" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input placeholder="Phone Number" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input placeholder="Address" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item name='role'>
                <Select placeholder="Select Role">
                  <Select.Option value="admin">Admin</Select.Option>
                  <Select.Option value="User">User</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!', min: 8 }]}
              >
                <Input.Password placeholder="Password" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#094265' }}>
                  Sign Up
                </Button>
              </Form.Item>
              <Form.Item>
                <Text type="secondary">
                  Sudah punya akun? <Link to="/login"><Text type="primary">Log in</Text></Link>
                </Text>
              </Form.Item>
            </Card>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CardSignUp;
