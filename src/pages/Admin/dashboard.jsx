/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import TableComponent from "../../components/Table"
import { useDispatch, useSelector } from "react-redux"
import { Button, Col, Flex,Row, Typography } from "antd"
import DrawerEditProduct from "../../components/Drawer/DrawerEditProduct"
import ColumnsProduct from "../../components/Table/Columns/ColumnsProduct"
import DrawerCreateProduct from "../../components/Drawer/DrawerCreateProduct"
import { listProductAction, unmountListProductAction } from "../../redux/actions/ProductAction/listProductAction"

const { Title } = Typography

const dashboard = () => {
  const dispatch = useDispatch()
  const [openCreate, setOpenCreate] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  useEffect(() => {
    dispatch(listProductAction())

    return (() => {
      dispatch(unmountListProductAction())
    })
  }, [dispatch])

  const openCreateHandler = () => {
    setOpenCreate(true)
  }

  const openEditHandler = () => {
    setOpenEdit(true)
  }

  const closeDrawer = () => {
    setOpenCreate(false)
    setOpenEdit(false)
  }

  const { data, loading } = useSelector((state) => state.product.list)


  return (
    <div style={{ padding: 100 }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Flex justify="center">
            <Title level={2}>Admin SentraPedia</Title>
          </Flex>
        </Col>
        <Col span={24}>
          <Flex justify="flex-end">
          <Button size="small" onClick={openCreateHandler}>Create New Product</Button>
          </Flex>
        </Col>
        <Col span={24}>
          <TableComponent
            dataSource={data}
            columns={ColumnsProduct()}
            loading={loading}
          />
        </Col>
      </Row>
      {openCreate && <DrawerCreateProduct openCreate={openCreate} closeCreate={closeDrawer} loading={loading}/>}
      {openEdit && <DrawerEditProduct openEdit={openEdit} closeEdit={closeDrawer} loading={loading}/>}
    </div>

  )
}

export default dashboard
