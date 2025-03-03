import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "tailwindcss";
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Report from './pages/Report'
import Notification from './pages/Notification'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add space after path */}
          <Route path='/dashboard' element={<Dashboard />} /> {/* Add space after path */}
          <Route path='/inventory' element={<Inventory />} /> {/* Add space after path */}
          <Route path='/notification' element={<Notification />} /> {/* Add space after path */}
          <Route path='/report' element={<Report />} /> {/* Add space after path */}
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}
