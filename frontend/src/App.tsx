// App.tsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FindProfessorPage } from './pages/findProfessor';
import { InitialPage } from './pages/initialPage';
import { ProfessorsPage } from './pages/professors';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/professors" element={<ProfessorsPage />} />
        <Route path="/" element={<InitialPage />} />
        <Route path="/buscarprofessor" element={<FindProfessorPage />} />
      </Routes>
    </Router>
  );
};

export default App;