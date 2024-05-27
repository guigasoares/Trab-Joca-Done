'use client'
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import InandDataPage from './components/InandDataPage';
import TestimonyPage from './components/TestimonyPage';
import SupportPage from './components/SupportPage';
import FormularyPage from './components/FormularyPage';
import SelfHelpPage from './components/SelfHelpPage';
import MapPage from './components/MapPage';
import './components - CSS/HomePage.css';
import './components - CSS/FormularyPage.css';
import './components - CSS/InandDataPage.css';
import './components - CSS/MapPage.css';
import './components - CSS/SelfHelpPage.css';
import './components - CSS/TestimonyPage.css';

function App() {
  
  const [currentPage, setCurrentPage] = useState('home');
  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="menu navbar-nav mr-auto">
          <li onClick={() => handleMenuClick('home')} className={currentPage === 'home' ? 'active' : ''}>Página Inicial</li>
          <li onClick={() => handleMenuClick('InandData')} className={currentPage === 'InandData' ? 'active' : ''}>Informações e Dados</li>
          <li onClick={() => handleMenuClick('Support')} className={currentPage === 'Support' ? 'active' : ''}>Recursos de Apoio</li>
          <li onClick={() => handleMenuClick('Testimony')} className={currentPage === 'Testimony' ? 'active' : ''}>Testemunhas</li>
          <li onClick={() => handleMenuClick('SelfHelp')} className={currentPage === 'SelfHelp' ? 'active' : ''}>Autoajuda</li>
          <li onClick={() => handleMenuClick('Formulary')} className={currentPage === 'Formulary' ? 'active' : ''}>Formulário</li>
          <li onClick={() => handleMenuClick('Map')} className={currentPage === 'Map' ? 'active' : ''}>Centros de Ajuda</li> 
        </ul>
        <img src="logoMackCuida.jpg" className="navbar-logo" />
      </nav>
      <div>
        <footer className="footer">
          <p>Você não precisa passar por isso sozinho, vem com a gente!</p>
          <p>#oMackCuidaSalva</p>
          <p>Integrante: Guilherme Soares</p>
        </footer>
      </div>
      <div className="content">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'InandData' && <InandDataPage />}
        {currentPage === 'Testimony' && <TestimonyPage />}
        {currentPage === 'Support' && <SupportPage />}
        {currentPage === 'Formulary' && <FormularyPage />}
        {currentPage === 'SelfHelp' && <SelfHelpPage />}
        {currentPage === 'Map' && <MapPage />} 
      </div>
    </div>
  );
}

export default App;