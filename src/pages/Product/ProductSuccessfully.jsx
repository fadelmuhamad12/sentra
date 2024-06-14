import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

const ProductSuccessfully = () => {
  return (
    <Result
      status="success"
      title="Successfully Purchased Your Product!"
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
