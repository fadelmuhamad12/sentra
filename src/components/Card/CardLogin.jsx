import { Link } from "react-router-dom";
import FormInput from '../Form/FormInput';
import { useDispatch } from "react-redux"
import { Button, Card, Col, Form, Row, Typography, message } from 'antd';
import { loginAction } from "../../redux/actions/Auth/authAction";

const { Text, Title } = Typography;
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
    <Row justify="center" style={{ minHeight: '100vh', alignItems: 'center' }}>
      <Col>
        <Form onFinish={onFinish}>
          <Card style={{ padding: '40px 20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <Title level={2}>SENTRA</Title>
            <Form.Item rules={[{ required: true, message: 'Please Input Username' }]}>
              <FormInput name='username' placeholder="Input Username" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Please input your password!' }]}>
              <FormInput name='password' type="password" placeholder="Masukkan password" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="small">
                Login
              </Button>
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
