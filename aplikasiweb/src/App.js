import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Lat1 = lazy(() => import('./Lat1'));
function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lat1" element={<Lat1 />} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;