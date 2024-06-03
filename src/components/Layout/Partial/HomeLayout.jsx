import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Link from 'antd/es/typography/Link';
import { StarFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Carousel, Col, Row, Typography, Skeleton, Space } from 'antd';
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

  const detailProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div style={{ padding: '0 350px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Carousel dots={true} autoplay arrows={true}>
            {data?.map((item) => (
              <div key={item.id} style={contentStyle}>
                <img src={item.image} alt={item.name} style={{ maxHeight: '400px', maxWidth: '100%' }} />
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
            {data?.map((item) => (
              <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                <Card
                  hoverable
                  style={{ width: '100%', marginTop: 50 }}
                  cover={<img src={item.image} alt={item.name} />}
                  onClick={() => detailProduct(item.id)}
                >
                  <div style={{ textAlign: 'center' }}>
                    <Text style={{ color: 'black' }}>{item.name}</Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 700 }}>Rp.{item.price}</Text>
                  </div>
                  <div style={{ textAlign: 'start' }}>
                    <Space size={4}>
                      <StarFilled style={{ color: 'yellowgreen', marginTop: 5 }} />
                      <Text style={{ color: 'grey', fontSize: 13 }}>{item.rating}</Text>
                    </Space>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomeLayout;
