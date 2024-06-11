import { useEffect } from "react"
import { Button, Col, Flex, Row, Typography } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { listProductAction, unmountListProductAction } from "../../redux/actions/ProductAction/listProductAction"
import TableComponent from "../../components/Table"
import ColumnsProduct from "../../components/Table/Columns/ColumnsProduct"

const { Text } = Typography

const dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProductAction())

    return (() => {
      dispatch(unmountListProductAction())
    })
  }, [])


  const { data, loading } = useSelector((state) => state.product.list)

  console.log(data);

  return (
    <div style={{ padding: 100 }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Flex justify="flex-end">
          <Button size="small">Create New Product</Button>
          </Flex>
        </Col>
        <Col span={24}>
          <Text>Admin SentraPedia</Text>
          <TableComponent
            dataSource={data}
            columns={ColumnsProduct()}
            loading={loading}
          />
        </Col>

      </Row>
    </div>

  )
}

export default dashboard
