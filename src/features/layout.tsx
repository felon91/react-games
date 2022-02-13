import { Header } from 'antd/es/layout/layout';
import { Layout, Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Urls } from 'src/components/routes/core';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => (
  <Layout>
    <Header>
      <Menu mode="horizontal">
        <MenuItem>
          <Link to={Urls.Home}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to={Urls.About}>About</Link>
        </MenuItem>
      </Menu>
    </Header>
    <Outlet />
  </Layout>
);

export default MainLayout;
