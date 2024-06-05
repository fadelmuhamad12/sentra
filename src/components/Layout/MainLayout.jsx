import { Layout } from 'antd'
import  Headers  from './Partial/Header'
import Content from './Partial/Content'
import Footers from './Partial/Footers'
const MainLayout = (props) => {
  const { userData } = props
  return (
    <Layout style={{ background: 'ffffff' }}>
      <Headers {...props} userData={userData}/>
      <Content {...props} />
      <Footers {...props} />
    </Layout>
  
  )
}

export default MainLayout
