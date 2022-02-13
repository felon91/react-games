import { Header, Content } from 'antd/es/layout/layout';
import { Layout, Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Urls } from 'src/components/routes/core';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './style.module.css';

const MainLayout = () => (
  <Layout>
    <Header>
      <Menu mode="horizontal">
        <MenuItem>
          <Link to={Urls.TicTacToe}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to={Urls.About}>About</Link>
        </MenuItem>
      </Menu>
    </Header>
    <Content className={styles.content}>
      <Outlet />
    </Content>
  </Layout>
);

export default MainLayout;
