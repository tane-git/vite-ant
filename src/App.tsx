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
        <Header className='bg-green-400'>
          <Nav />
        </Header>
        <Content>
          <div className='bg-red-500'>
            <p className='text-purple-500'>test</p>
          </div>
          Content
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </>
  )
}