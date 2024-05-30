import { Link } from "react-router-dom";
import FormInput from '../Form/FormInput';
import { Button, Card, Col, Form, Row, Typography } from 'antd';

const { Text, Title } = Typography;
//
const CardLogin = () => {
  return (
    <Row justify="center" style={{ minHeight: '100vh', alignItems: 'center' }}>
      <Col>
        <Form>
          <Card style={{ padding: '40px 20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <Title level={2}>SENTRA</Title>
            <Form.Item rules={[{ required: true, message: 'Please input your email!' }]}>
              <FormInput name='email' placeholder="Input Email" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Please input your password!' }]}>
              <FormInput name='password' type="password" placeholder="Masukkan password" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Link to={'/home'}>
                <Button type="primary" htmlType="submit" size="small">
                  Login
                </Button>
              </Link>
            </Form.Item>
            <Text>Or</Text>
            <Form.Item>
              <Link to={"/sign-up"}>
                <Text type="primary">Sign Up</Text>
              </Link>
            </Form.Item>
          </Card>
        </Form>
      </Col>
    </Row>
  );
};

export default CardLogin;
