// App.tsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FindTechnicianPage } from './pages/findTechnician';
import { InitialPage } from './pages/initialPage';
import { TechniciansPage } from './pages/technicians';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tecnicos" element={<TechniciansPage />} />
        <Route path="/" element={<InitialPage />} />
        <Route path="/buscartecnico" element={<FindTechnicianPage />} />
      </Routes>
    </Router>
  );
};

export default App;
