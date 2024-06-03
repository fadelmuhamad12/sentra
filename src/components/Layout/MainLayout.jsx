import { Layout } from 'antd'
import  Headers  from './Partial/Header'
import Content from './Partial/Content'
import Footers from './Partial/Footers'
const MainLayout = (props) => {
  const { data } = props
  return (
    <Layout style={{ background: 'ffffff' }}>
      <Headers {...props} data={data}/>
      <Content {...props} />
      <Footers {...props} />
    </Layout>
  
  )
}

export default MainLayout
