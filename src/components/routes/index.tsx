import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'src/pages/home';
import About from 'src/pages/about';
import MainLayout from 'src/features/layout';

const RoutesList = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
);

export default RoutesList;
