import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Technology from './components/Hero/Technology';
import Register from './components/01/Register';
import Homepages from './components/02/Homepages';
import Team from './components/03/Team';
import Case from './components/04/Case';
import Blog from './components/05/Blog';
import Portfolio from './components/06/Portfolio';
import Pricing from './components/07/Pricing';
import Contact from './components/08/Contact';
import Misc from './components/09/Misc';
import Footer from './components/Footer/Footer';


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
    <Team />
    <Case />
    <Blog />
    <Portfolio />
    <Pricing />
    <Contact/>
    <Misc/>
    <Footer />
  </React.StrictMode>
);
