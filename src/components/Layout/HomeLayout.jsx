import React, { useEffect, useState } from 'react';
import LoadingPage from '../Loading/Loading'
import { Card, Carousel, Col, Flex, Row, Space, Typography } from 'antd';
import axios from 'axios';

const { Text } = Typography;

const HomeLayout = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2002/product')
      .then(response => {
        console.log(response.data.data);
        setDatas(Array.isArray(response.data.data) ? response.data.data : []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const contentStyle = {

    background: '#364d79',
  };

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Carousel dots={true} autoplay>
          {datas?.map((item) => (
            <div key={item.id} style={contentStyle}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </Carousel>
      </Col>
      <Col span={16}>
        <Flex justify='center'>
          <Text style={{ fontWeight: 700, marginTop: 50 }}>DISCOUNT %</Text>
        </Flex>
        <Space direction='horizontal' size={30}>
          {datas?.map((item) => (
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card hoverable key={item.id} style={{ width: 220, marginTop: 50 }} cover={<img src={item.image} alt={item.name} />}>
                  <Col span={24}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Text style={{ color: 'black' }}>{item.name}</Text>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Text style={{ color: 'black' }}>Rp. {item.price}</Text>
                    </div>
                  </Col>
                </Card>
              </Col>
            </Row>
          ))}
        </Space>
      </Col>
    </Row>
  );
};

export default HomeLayout;
