import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailProductAction, unmountDetailProduct } from '../../redux/actions/ProductAction/detailProductAction'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Col, Flex, Image, Row, Skeleton, Space, Typography } from 'antd'
import { StarFilled } from '@ant-design/icons'
import { listProductAction, unmountListProductAction } from '../../redux/actions/ProductAction/listProductAction'

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
  console.log(product);

  const { data, loading } = useSelector((state) => state.product.detail)


  const subTotal = (data?.price * total)

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
      <Card>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Image src={data?.image} preview={false} />
          </Col>

          <Col span={8} style={{ marginTop: 50 }}>
            <Row gutter={16}>
              <Col span={24}>
                <Text style={{ fontWeight: 700, fontSize: 20 }}>{data?.name}</Text>
              </Col>
              <Col span={24}>
                <Space size={4}>
                  <StarFilled style={{ color: 'yellowgreen', marginTop: 5 }} />
                  <Text style={{ fontSize: 20, color: 'grey' }}>{data?.rating}</Text>
                </Space>
              </Col>
              <Col span={24} style={{ marginTop: 20 }}>
                <Space direction='vertical'>
                  <Text style={{ fontSize: 15, fontWeight: 600 }}>Deskripsi</Text>
                  <Text style={{ color: 'black', fontSize: 14 }}>{data?.description}</Text>
                </Space>
              </Col>
              <Col span={24}>
                <Text style={{ color: 'black', fontSize: 14 }}>{data?.status}</Text>
              </Col>
            </Row>
          </Col>

          <Col span={8} style={{ marginTop: 50 }}>
            <Card>
              <Row gutter={16}>
                <Col span={24}>
                  <Text style={{ fontWeight: 500, fontSize: 15 }}>Atur Jumlah Catatan</Text>
                </Col>
                <Col span={24}>
                  <Space size={5}>
                    <Text style={{ fontWeight: 500, fontSize: 15, cursor: 'pointer' }} onClick={removeQuantity}>-</Text>
                    <Text style={{ fontWeight: 500, fontSize: 15 }}>{total}</Text>
                    <Text style={{ fontWeight: 500, fontSize: 15, cursor: 'pointer' }} onClick={addQuantity}>+</Text>
                  </Space>
                </Col>
                <Col span={12} style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}>Total</Text>
                </Col>
                <Col span={12} style={{ marginTop: 20 }}>
                  <Flex justify='flex-end'>
                    <Text style={{ fontSize: 15, fontWeight: 500 }}>{`IDR ${Number(subTotal).toLocaleString()}`}</Text>
                  </Flex>
                </Col>
                <Col span={24}>
                  <Flex justify='center'>
                    <Button size='small'>Add To Cart</Button>
                  </Flex>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>

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
      <Card style={{ marginTop: 20 }}>
        <Row gutter={[16, 16]}>
          {product?.data?.slice(0,4).map((p) => (
            <Col xs={24} sm={12} md={8} lg={6} key={p.id}>
              <Card hoverable style={{ width: '100%', marginTop: 50 }} cover={<img src={p.image} alt={p.name} />}>
                <Flex justify='center'>
                  <Text strong>{p.name}</Text>
                </Flex>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>


    </div>
  )
}

export default DetailProduct
