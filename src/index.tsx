import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Technology from './components/Hero/Technology';
import Register from './components/01/Register';
import Homepages from './components/02/Homepages';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    
    <Hero />
    <Technology />
    
    <Register />
    <Homepages />
  </React.StrictMode>
);
