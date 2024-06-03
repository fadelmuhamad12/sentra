import { Layout } from 'antd'
import  Headers  from './Partial/Header'
import Content from './Partial/Content'
const MainLayout = (props) => {

  return (
    <Layout style={{ background: 'ffffff' }}>
      <Headers {...props} />
      <Content {...props} />
    </Layout>
  
  )
}

export default MainLayout
