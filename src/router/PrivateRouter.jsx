import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import GameMemory from '../views/gameMemory/GameMemory';

const PrivateRouter = () => {
  return (
    <Routes>
      <Route path="/memoryGame" element={<GameMemory />} />
      <Route path="/*" element={<Navigate to={'/memoryGame'} />} />
    </Routes>
  );
};

export default PrivateRouter;
