'use client'
import React, { useState } from 'react';
function SelfHelpPage() {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const questions = [
      "Você sente necessidade de consumir álcool ou outras substâncias todos os dias?",
      "O uso de substâncias tem afetado seu desempenho no trabalho ou nos estudos?",
      "Você já tentou parar de usar, mas não conseguiu?",
      "Amigos ou familiares já expressaram preocupação com seu uso de substâncias?",
      "Você já teve problemas legais ou financeiros devido ao uso de substâncias?",
    ];
  
    const handleChange = (questionId, value) => {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
      setAnswers({});
    };
  
    return (
      <div className="selfhelp-container">
        <h1 className="selfhelp-title">Responda as questões abaixo e procure auxílio, se necessário:</h1>
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index}>
              <p>{question}</p>
              <label className='labelquiz'>
                Sim
                <input type="radio" name={`question-${index}`} value="Sim" onChange={() => handleChange(index, 'Sim')} checked={answers[index] === 'Sim'}/>
              </label>
              <label className='labelquiz'>
                Não
                <input type="radio" name={`question-${index}`} value="Não" onChange={() => handleChange(index, 'Não')} checked={answers[index] === 'Não'}/>
              </label>
            </div>
          ))}
          <button className='botaoquiz' type="submit">Enviar</button>
        </form>
        {submitted && <p className='messageafter'>Se você respondeu sim ou ficou na dúvida do que assinalar em uma dessas perguntas, nós indicamos que você procure ajuda! Essa ajuda é simples e pode começar agora, basta preencher o formulário na aba de "Formulário" em nosso site!</p>}
      </div>
    );
  }

  export default SelfHelpPage;