import { Link } from "react-router-dom"
import FormInput from '../Form/FormInput'
import { Button, Card, Col, Flex, Form, Image, Row, Space, Typography } from 'antd'

const { Text, Title } = Typography

const CardLogin = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} style={{ marginTop: 100 }}>
        <Form>
          <Flex justify="center">
            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Flex justify="center">
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
                        <Button size='small'>Login</Button>
                      </Link>
                    </Flex>
                  </Col>
                  <Col span={24}>
                    <Flex justify="center">
                      <Text>
                        Or
                      </Text>
                    </Flex>
                  </Col>
                  <Col span={24} style={{ textAlign: "center" }}>
                    <Link to={"/sign-up"}>
                      <Text type="primary">Sign Up</Text>
                    </Link>
                  </Col>
                </Row>
              </Flex>

            </Card>
          </Flex>
        </Form>
      </Col>
    </Row>
  )
}

export default CardLogin
