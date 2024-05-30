import React from 'react';
// import { CartIcon } from '../../assets/icon/index'
import { Badge, Col, Dropdown, Flex, Layout, Row, Space, Typography, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const { Text } = Typography

const Headers = (props) => {
  const { data, loading } = props
  const userName = data && data.user && data.user.length > 0 ? data.user[0].name : 'Guest';

  const items = [
    {
      key: 1,
      label: <Link to='/'><Text>Sign Out</Text></Link>
    }
  ];

  return (
    <>
      <Header style={{ background: '#29B475', width: '100vw' }}>
        <Row gutter={16} style={{ display: 'flex', alignItems: 'center' }}>
          <Col span={12}>
            <Text>Sentra</Text>
          </Col>
          <Col span={12}>
            <Flex justify='flex-end'>
              <Space size={20}>
              </Space>
              {/* React Component still not work ==== */}
              {/* <CartIcon /> */}
              <Badge count={5}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    background: '#F5F5F5',
                    borderRadius: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                </div>
              </Badge>
              <Dropdown overlay={<Menu items={items} key={items?.id}/>}>
                <Text style={{ marginTop: 3, marginLeft: 20, cursor: 'pointer' }}>Welcome, {userName}</Text>
              </Dropdown>
            </Flex>
          </Col>
        </Row>
      </Header>
    </>

  );
};
export default Headers;