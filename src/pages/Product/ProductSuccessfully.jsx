import { Button, Result } from 'antd'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductSuccessfully = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.reload()
    }, 5000)
  })


  return (
    <Result
      status="success"
      title="Successfully Purchased Your Product! Redirecting To Home in 5 seconds..."
      subTitle="Order number: 2017182818828182881, configuration takes 1-5 minutes, please wait."
      extra={[
        <>
          <Link to='/'>
            <Button type="primary" key="console">
              Back
            </Button>,
          </Link>
        </>
      ]}
    />
  )
}

export default ProductSuccessfully
