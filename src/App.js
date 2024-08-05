import React from 'react';
import User from './assets/images/user.jpg';
import logo from './logo.svg';
import Dashboard from './pages/Dashboard';
import { HomeFilled, BarChartOutlined, CreditCardOutlined, ShoppingOutlined, FileDoneOutlined, SearchOutlined, MailOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Input, Row, Col, Badge, Dropdown, Card } from 'antd';
const { Header, Content, Sider } = Layout;
const menuItems = [HomeFilled, BarChartOutlined, FileDoneOutlined, CreditCardOutlined, ShoppingOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
  };
});
const items = [
  {
    key: 'd1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Emails
      </a>
    ),
  },
  {
    key: 'd2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
       Notifications
      </a>
    ),
  },
  {
    key: 'd3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Settings
      </a>
    ),
  },
];
const App = () => {
  return (
    <Layout>
      <Header className='header'>
        <Row className='ant-row' type="flex" align="middle">
          <Col lg={{ span: 2 }} md={{ span: 4 }} sm={{ span: 4 }} xs={{ span: 6 }}>
            <img src={logo} className="app-logo vertical-align-middle" alt="logo" />
          </Col>
          <Col className='search-col' lg={{ span: 5 }} md={{ span: 10 }} sm={{ span: 10 }} xs={{ span: 14 }}>
            <Input className="input-search" size="small" placeholder="Search" prefix={<SearchOutlined />} />
          </Col>
          <Col className="header-icons-list" lg={{ span: 17 }} md={{ span: 10 }} sm={{ span: 10 }}>
            <MailOutlined className='header-icon' />
            <SettingOutlined className='header-icon' />
            <span className='header-icon notification'><Badge dot><BellOutlined /></Badge></span>
            <img width="38" className='header-icon-img vertical-align-middle' src={User} alt="user" />
          </Col>
          <Col className="header-icons-list-mobile" xs={{ span: 4 }}>
          <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
      >
        <img width="37" className='header-icon-img-mobile vertical-align-middle' src={User} alt="user" />
      </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          width={70}>
          <Menu
          theme='dark'
            mode="inline"
            defaultSelectedKeys={['sub1']}
            defaultOpenKeys={['sub1']}
            items={menuItems}
          />
        </Sider>
        <Layout>
          <Content className='content p-25'>
             <Dashboard/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;