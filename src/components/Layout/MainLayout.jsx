import { Layout } from 'antd'
import  Headers  from './Header'
import Footers from './Footers'
import HomeLayout from './HomeLayout'
import React from 'react'

const MainLayout = (props) => {
  return (
    <Layout style={{ background: 'ffffff' }}>
      <Headers {...props}/>
      <HomeLayout {...props} />
      {/* <Footers {...props}/> */}
    </Layout>
  
  )
}

export default MainLayout
