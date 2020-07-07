import React from 'react';
import {Layout} from 'antd';
import HorizontalDefault from 'components/Topbar/HorizontalBar';
import Sidebar from 'components/Sidebar/index';

const {Content, Footer} = Layout;

const Home = () => {
  return (
    <Layout className="gx-app-layout">
      <Sidebar />
      <Layout>
        <HorizontalDefault />
        <Content className="gx-layout-content gx-container-wrap">
          <div className="gx-main-content-wrapper">
            <div>
              <h2 className="title gx-mb-4">Sample Page</h2>
              <div className="gx-d-flex justify-content-center">
                <h4>Start building your app. Happy Coding!</h4>
              </div>
            </div>
          </div>
          <Footer>
            <div className="gx-layout-footer-content">Footer</div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
