import { Layout } from 'antd'
import  Headers  from './Header'
import Footers from './Footers'
import HomeLayout from './HomeLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../../redux/actions/authAction'
import DetailProduct from '../../pages/Product/DetailProduct'


const MainLayout = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authAction())
  }, [dispatch])

  const { data, loading } = useSelector((state) => state.authReducer)

  return (
    <Layout style={{ background: 'ffffff' }}>
      <Headers {...props} data={data} loading={loading}/>
      <HomeLayout {...props} />
      {/* <DetailProduct {...props} /> */}
      {/* <Footers {...props}/> */}
    </Layout>
  
  )
}

export default MainLayout
