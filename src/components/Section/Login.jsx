import { Link } from "react-router-dom"
import FormInput from '../Form/FormInput'
import { Faze } from '../../assets/images'
import { Button, Card, Col, Flex, Form, Image, Row, Typography } from 'antd'


const { Text, Title } = Typography

const Login = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12} style={{ marginTop: 100 }}>
        <Form>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title style={{ textAlign: 'center' }}>SENTRA</Title>
              </Col>
              <Col span={24}>
                <FormInput name='email' />
              </Col>
              <Col span={24}>
                <FormInput name='password' />
              </Col>
              <Col span={24}>
                <Flex justify='center'>
                  <Link to={'/home'}>
                    <Button size='small'>Sign In</Button>
                  </Link>
                </Flex>
              </Col>
              <Col span={24} style={{ textAlign: "center", marginTop: 14 }}>
                <Link to={"/home"}>
                  <Text type="primary">Forgot Password</Text>
                </Link>
              </Col>
            </Row>
          </Card>
        </Form>
      </Col>
      <Col span={12} style={{ marginTop: 100 }}>
        <Image src={Faze} />
      </Col>
    </Row>
  )
}

export default Login
