import React, { useState } from 'react';

// antd
import { Col, Menu, Row } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// const { SubMenu } = Menu;

// internal
import logo from './img/logo.svg';
import logIn from './img/logIn.svg';

// Navigation Bar
export const Nav: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  // Configure the links the menu will display:
  const links: string[] = [
    'Home',
    'Explorer',
    'Projects',
    'Grants',
    'Documentation',
    'GitHub'
  ]
  // Refactor to require links to be passed to component?

  return (
    <div >
      <Row>
        <Col span={6}>
        {/* <Col span={6} className='bg-red-400 items-end custom'> */}
          <img src={logo} alt="logo" />
        </Col>

        <Col span={12}>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
            {links.map((link: string) => (
              <Menu.Item key={link}>
                {link}
              </Menu.Item>
            ))}
          </Menu>
        </Col>

        <Col span={6}>
          <img src={logIn} alt="logIn" />
        </Col>
      </Row>
    </div>
  );
}