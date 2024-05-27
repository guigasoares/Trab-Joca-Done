'use client'
import React, { useState } from 'react';
function FormularyPage() {
    return (
      <div className="formulary-container">
        <h1 className="formulary-title">Preencha o formulário e receba a ajuda que você precisa:</h1>
        <form className="contact-form">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
  
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="phone">Número:</label>
          <input type="tel" id="phone" name="phone" />
  
          <label htmlFor="description">Descreva sua situação:</label>
          <textarea id="description" name="description" required></textarea>
  
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }


  export default FormularyPage;