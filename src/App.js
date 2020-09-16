import React from 'react';
import './App.css';
import SiderDemo from './components/nav';
import './assets/style.css'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
       <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider><SiderDemo/></Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
