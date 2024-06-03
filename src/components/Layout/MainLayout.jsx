import { Layout } from 'antd'
import  Headers  from './Partial/Header'
import React, { useEffect } from 'react'
import { Content } from 'antd/es/layout/layout'


const MainLayout = (props) => {

  return (
    <Layout style={{ background: 'ffffff' }}>
      <Headers {...props} />
      <Content {...props}/>
    </Layout>
  
  )
}

export default MainLayout
