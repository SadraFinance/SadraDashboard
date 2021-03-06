import React from "react";
import { ConfigProvider } from "antd";
import { Route } from "react-router-dom";
//import Loading from "./components/loading.jsx"
import "./assets/style.css";
import "./App.css";
import BasicLayout from "./layouts/BasicLayout";
import "./assets/font/font-face.css";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <ConfigProvider direction="rtl" className="App">
      <Router>
        <Route path="/" component={BasicLayout} />
      </Router>
    </ConfigProvider>
  );
}

export default App;
