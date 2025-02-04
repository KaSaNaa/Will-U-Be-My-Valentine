import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import GiftPage from './components/GiftPage'; 
import './index.css';

const RoutesPage: React.FC = () => {
  const [accessGranted, setAccessGranted] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App setAccessGranted={setAccessGranted} />} />
        <Route
          path="/gift"
          element={accessGranted ? <GiftPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesPage;