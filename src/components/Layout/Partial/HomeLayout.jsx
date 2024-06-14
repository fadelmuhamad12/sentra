import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardProduct from '../../Card/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Col, Row, Typography, Skeleton } from 'antd';
import { listProductAction, unmountListProductAction } from '../../../redux/actions/ProductAction/listProductAction';

const { Text } = Typography;

const HomeLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listProductAction());

    return () => {
      dispatch(unmountListProductAction());
    };
  }, [dispatch]);

  const { data, loading } = useSelector((state) => state.product.list);
  const searchQuery = useSelector((state) => state.product.search);

  const detailProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredData = data?.filter(item => {
    if (typeof searchQuery !== 'string') return true;
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div style={{ padding: '0 50px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Carousel
            dots={true}
            autoplay
            arrows={true}
            className="custom-carousel"
          >
            {filteredData?.map((item) => (
              <div key={item.id} className="carousel-content">
                <img src={item.image} alt={item.name} className="carousel-image" />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={24}>
          <div style={{ marginTop: 50 }}>
            {loading ? <Skeleton active={true} /> : (
              <Text style={{ fontWeight: 700, fontSize: 25 }}>Only For You</Text>
            )}
          </div>
          <Row gutter={[16, 16]} justify="center">
            {filteredData?.map((item) => (
              <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                <CardProduct
                  name={item?.name}
                  id={item?.id}
                  price={item?.price}
                  rating={item?.rating}
                  image={item?.image}
                  detailProduct={detailProduct}
                  status={item?.status}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomeLayout;
