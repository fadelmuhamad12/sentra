import { Layout } from 'antd'
import  Headers  from './Partial/Header'
import Content from './Partial/Content'
const MainLayout = (props) => {
  const { data } = props
  return (
    <Layout style={{ background: 'ffffff' }}>
      <Headers {...props} data={data}/>
      <Content {...props} />
    </Layout>
  
  )
}

export default MainLayout
