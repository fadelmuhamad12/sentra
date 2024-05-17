import { Col, Row } from 'antd'
import { Login } from '../components/Section'

const LoginPage = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Login />
      </Col>
    </Row>

  )
}

export default LoginPage
