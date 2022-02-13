import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from 'src/pages/about';
import MainLayout from 'src/features/layout';
import TicTacToe from 'src/pages/tic-tac-toe';

const RoutesList = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<TicTacToe />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
);

export default RoutesList;
