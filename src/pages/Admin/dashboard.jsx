import React, { useEffect, useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DrawerEditProduct from "../../components/Drawer/DrawerEditProduct";
import DrawerCreateProduct from "../../components/Drawer/DrawerCreateProduct";
import TableComponent from "../../components/Table";
import ModalDelete from "../../components/Modal/ModalDelete";
import ColumnsProduct from "../../components/Table/Columns/ColumnsProduct";
import { detailProductAction } from "../../redux/actions/ProductAction/detailProductAction";
import { listProductAction, unmountListProductAction } from "../../redux/actions/ProductAction/listProductAction";

const { Title } = Typography;

const Dashboard = () => {
  const dispatch = useDispatch();
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null); // Added state to hold current product ID

  useEffect(() => {
    dispatch(listProductAction());

    return () => {
      dispatch(unmountListProductAction());
    };
  }, [dispatch]);

  const openCreateHandler = () => {
    setOpenCreate(true);
  };

  const openEditHandler = (id) => {
    dispatch(detailProductAction(id));
    setOpenEdit(true);
  };

  const closeDrawer = () => {
    setOpenCreate(false);
    setOpenEdit(false);
  };

  const openModal = (id) => {
    dispatch(detailProductAction(id));
    setCurrentProductId(id); 
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setCurrentProductId(null); 
  };

  const { data, loading } = useSelector((state) => state.product.list);

  return (
    <div style={{ padding: 100 }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title level={2}>Admin SentraPedia</Title>
          </div>
        </Col>
        <Col span={24}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button size="small" onClick={openCreateHandler}>
              Create New Product
            </Button>
          </div>
        </Col>
        <Col span={24}>
          <TableComponent
            dataSource={data}
            columns={ColumnsProduct(openEditHandler, openModal)}
            loading={loading}
          />
        </Col>
      </Row>
      {openCreate && (
        <DrawerCreateProduct openCreate={openCreate} closeCreate={closeDrawer} loading={loading} />
      )}
      {openEdit && (
        <DrawerEditProduct openEdit={openEdit} closeEdit={closeDrawer} loading={loading} />
      )}
      {modal && (
        <ModalDelete
          openModal={modal}
          closeModal={closeModal}
          loading={loading}
          productId={currentProductId} // Pass the current product ID to the modal
        />
      )}
    </div>
  );
};

export default Dashboard;
