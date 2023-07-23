import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signup from './Coponents/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Routes>
      <Route path="/:category" element={<App />} />
    </Routes> 
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);

