import { Link } from "react-router-dom"
import FormInput from '../Form/FormInput'
import { Button, Card, Col, Flex, Form, Image, Row, Typography } from 'antd'

const { Text, Title } = Typography

const CardSignUp = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} style={{ marginTop: 100 }}>
        <Form>
          <Flex justify="center">
            <Card>
              <Col span={24}>
                <Link to='/'>
                  <Button size="small">
                    Back
                  </Button>
                </Link>
              </Col>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Col span={24}>
                    <Title style={{ textAlign: 'center' }}>SENTRA</Title>
                  </Col>
                  <Col span={24}>
                    <FormInput name='email' />
                  </Col>
                  <Col span={24}>
                    <FormInput name='username' />
                  </Col>
                  <Col span={24}>
                    <FormInput name='phoneNumber' />
                  </Col>
                  <Col span={24}>
                    <FormInput name='password' />
                  </Col>
                </Col>
                <Col span={24}>
                  <Flex justify='center'>
                    <Link to={'/'}>
                      <Button size='small'>Sign Up</Button>
                    </Link>
                  </Flex>
                </Col>
              </Row>
            </Card>
          </Flex>
        </Form>
      </Col>
    </Row>
  )
}

export default CardSignUp
