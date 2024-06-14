import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Flex, Row, Skeleton, Typography } from 'antd'
import CardDetailProduct from '../../components/Card/CardDetailProduct'
import CardProductRecomendation from '../../components/Card/CardProductRecomendation'
import { listProductAction, unmountListProductAction } from '../../redux/actions/ProductAction/listProductAction'
import { detailProductAction, unmountDetailProduct } from '../../redux/actions/ProductAction/detailProductAction'
import { addToCart } from '../../redux/actions/AddToCart/addToCardAction'

const { Text } = Typography

const DetailProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [total, setTotal] = useState(0)

  const addQuantity = () => {
    setTotal(total + 1)
  }

  const removeQuantity = () => {
    setTotal(total - 1)
  }

  useEffect(() => {
    dispatch(listProductAction())
    dispatch(detailProductAction(id))

    return (() => {
      dispatch(unmountListProductAction())
      dispatch(unmountDetailProduct())
    })
  }, [dispatch, id])

  const product = useSelector((state) => state.product.list)

  const { data, loading } = useSelector((state) => state.product.detail)

  const subTotal = (data?.price * total)

  const handleAddToCart = () => {
    dispatch(addToCart(data))
  };

  if (!data) {
    return <div>Product Not Found</div>
  }

  if (loading) {
    return <Skeleton active={true} />
  }

  return (
    <div style={{ padding: '0 250px', marginTop: '50px' }}>
      <Link to={'/home'}>
        <Text style={{ cursor: 'pointer' }}>Back</Text>
      </Link>
      <CardDetailProduct data={data} subTotal={subTotal} addQuantity={addQuantity} removeQuantity={removeQuantity} total={total} handleAddToCart={handleAddToCart}/>
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <Text style={{ fontWeight: 700, fontSize: 20 }}>Recommendation Product</Text>
        </Col>
        <Col span={12}>
          <Link to={'/home'}>
            <Flex justify='flex-end'>
              <Text style={{ fontWeight: 500, fontSize: 15 }}>See All</Text>
            </Flex>
          </Link>
        </Col>
      </Row>
      <CardProductRecomendation product={product}/>
    </div>
  )
}

export default DetailProduct
