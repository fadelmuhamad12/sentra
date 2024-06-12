import { Link } from "react-router-dom";
import FormInput from '../Form/FormInput';
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/Auth/authAction";
import { Button, Card, Col, Form, Row, Typography, message } from 'antd';

const { Text, Title } = Typography;

const LoginHeader = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderBottom: '-10px solid #FA5A2C' }}>
      <Row justify="space-between" align="middle" style={{ padding: '20px 20px' }}>
        <Col>
          <Row align="middle">
            <Text style={{ color: '#FA5A2C', fontSize: '18px', fontWeight: 'bold', marginRight: '5px' }}>SentraPedia</Text>
            <Text style={{ color: '#000000', fontSize: '18px', fontWeight: 600 }}>Log in</Text>
          </Row>
        </Col>
        <Col>
          <Link to="/" style={{ color: '#FA5A2C', fontSize: '14px' }}>Butuh bantuan?</Link>
        </Col>
      </Row>
    </div>
  );
};

const CardLogin = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { username, password } = values;
    dispatch(loginAction({ username, password }, () => {
      message.success('Login Success');
    }, (err) => {
      message.error(err);
    }));
  };

  return (
    <div>
      <LoginHeader />
      <Row justify="center" style={{ minHeight: '100vh', alignItems: 'center', backgroundColor: '#FA5A2C' }}>
        <Col>
          <Form onFinish={onFinish}>
            <Card style={{ padding: '40px 20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
              <Title level={2} style={{ color: '#FA5A2C' }}>Sentra</Title>
              <Form.Item rules={[{ required: true, message: 'Please input your username!' }]}>
                <FormInput name='username' placeholder="No. Handphone/Username/Email" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: 'Please input your password!' }]}>
                <FormInput name='password' type="password" placeholder="Password" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#FA5A2C', borderColor: '#FA5A2C' }}>
                  Log In
                </Button>
              </Form.Item>
              <Form.Item>
                <Text type="secondary">
                  Baru di Sentra? <Link to="/sign-up"><Text type="primary">Daftar</Text></Link>
                </Text>
              </Form.Item>
            </Card>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CardLogin;
