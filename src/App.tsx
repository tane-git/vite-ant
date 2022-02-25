import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PrimaryButton from './components/PrimaryButton';
import { Nav } from './components';

// antd
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function App() {

  return (
    <>
      <Nav />
      <Layout>
        <Header>
          <Nav />
        </Header>
        <Content>
          Content
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </>
  )
}