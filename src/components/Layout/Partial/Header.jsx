import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconCart } from '../../../assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { setSearchQuery } from '../../../redux/actions/Search/searchAction';
import { SearchOutlined, BellOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Col, Dropdown, Layout, Row, Space, Typography, Menu, Input, Flex, Image, message } from 'antd';
import { logoutAction } from '../../../redux/actions/Auth/authAction';

const { Header } = Layout;
const { Text, Title } = Typography;

const Headers = (props) => {
  const dispatch = useDispatch()
  const { userData } = props;
  const navigate = useNavigate();
  const searchQuery = useSelector((state) => state.product.search);

  const searchBar = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSignOut = () => {
    dispatch(logoutAction(() => {
      return message.success('Logout Success')
    }, () => {
      return message.error('Error')
    })); 
  };
  
  const items = [
    {
      key: 'signout',
      label: (
        <span onClick={handleSignOut}>
          Sign Out
        </span>
      ),
    },
  ];

  const cartHandler = () => {
    navigate('/cart');
  };

  const cartCount = useSelector((state) => state.product.addToCart);

  return (
    <>
      <Header style={{ background: '#6FC6FB', width: '100vw', display: 'flex', alignItems: 'center' }}>
        <Row style={{ flex: 1, alignItems: 'center' }}>
          <Col span={4} style={{ marginTop: -15 }}>
            <Link to='/'>
              <Title level={4} style={{ color: 'black' }}>SentraPedia</Title>
            </Link>
          </Col>
          <Col span={12}>
            <Flex justify='center'>
              <Input
                onChange={searchBar}
                prefix={<SearchOutlined />}
                placeholder="Cari di SentraPedia"
                style={{ borderRadius: 10 }}
              />
            </Flex>
          </Col>
          <Col span={8} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Space size={20}>
              <Badge count={cartCount?.totalCount}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={cartHandler}
                >
                  <Image src={IconCart} preview={false} style={{ marginTop: -8, color: 'black' }}/>
                </div>
              </Badge>
              <BellOutlined style={{ fontSize: '20px', color: 'black', cursor: 'pointer' }} />
              <MailOutlined style={{ fontSize: '20px', color: 'black', cursor: 'pointer' }} />
              <Dropdown overlay={<Menu items={items} />}>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <UserOutlined style={{ fontSize: '20px', color: 'black' }} />
                  <Text style={{ marginLeft: 8, color: 'black' }}>Welcome, {userData?.username}</Text>
                </div>
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default Headers;
