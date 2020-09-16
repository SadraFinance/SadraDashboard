import React from 'react';
import { ConfigProvider } from 'antd';
import './assets/style.css'
import './App.css';
import BasicLayout from './layouts/BasicLayout';
import './assets/font/font-face.css';


function App() {
  return (
    <ConfigProvider direction="rtl" className="App">
     <BasicLayout/>
    </ConfigProvider>
  );
}

export default App;
