import React, { useState } from 'react';

function TestimonyPage() {
  const [items, setItems] = useState([
    { name: 'Anônimo', comment: "Sofria com a dependência há anos, mas graças ao apoio do 'MackCuida', estou livre e me sinto melhor do que nunca!", index: 0 },
    { name: 'Anônimo', comment: "O grupo 'MackCuida' me deu a força que eu precisava para enfrentar o vício. Hoje, sou uma pessoa nova e estou construindo uma vida melhor para mim e minha família." , index: 1 },
    { name: 'Anônimo', comment: "Achei que nunca conseguiria superar o vício, mas o 'MackCuida me provou o contrário. Sou eternamente grato por toda a ajuda que recebi.", index: 2 },
    { name: 'Anônimo', comment: "O grupo 'MackCuida foi a luz no fim do túnel para mim. Lá, encontrei o apoio e a orientação que precisava para me recuperar.", index: 3 },
    { name: 'Anônimo', comment: "Graças ao 'MackCuida, finalmente consegui me libertar das drogas e do álcool. Hoje, vivo uma vida plena e feliz.", index: 4 },
    { name: 'Anônimo', comment: "O grupo 'MackCuida me deu a chance de recomeçar minha vida. Hoje, sou uma pessoa orgulhosa de quem me tornei.", index: 5 },
    { name: 'Anônimo', comment: "O grupo 'MackCuida salvou minha vida. Sem o apoio de vocês, eu não sei onde estaria hoje.", index: 6 },
    { name: 'Anônimo', comment: "O grupo 'MackCuida me deu a esperança que eu precisava para lutar contra o vício. Hoje, sou um vencedor!", index: 7 },
    { name: 'Anônimo', comment: "O grupo 'MackCuida me deu a chance de recomeçar e reconstruir minha vida. Hoje, sou uma pessoa grata e feliz." , index: 8 },
    { name: 'Anônimo', comment: "O grupo 'MackCuida é mais do que um recurso, é uma família. Sou grato por fazer parte dessa comunidade.", index: 9 },
  ]);

  const [newTestimony, setNewTestimony] = useState({
    name: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTestimony(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimony.name.trim() === '' || newTestimony.comment.trim() === '') {
      alert('Por favor, preencha tanto o nome quanto o comentário.');
      return;
    }
    const updatedTestimonies = [{ ...newTestimony, index: items.length }, ...items];
    setItems(updatedTestimonies);
    setNewTestimony({ name: '', comment: '' });
  };

  const handleDelete = (indexToDelete) => {
    const updatedTestimonies = items.filter(item => item.index !== indexToDelete);
    setItems(updatedTestimonies);
  };

  return (
    <div className='container'>
      <h1 className='inicial'>Alguns Relatos de Pessoas que Ajudamos</h1>
      <div className="add-testimony">
        <h2>Adicionar Testemunho</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={newTestimony.name} onChange={handleChange} required />
          </label>
          <label>
            Comentário:
            <textarea name="comment" value={newTestimony.comment} onChange={handleChange} required />
          </label>
          <button type="submit">Adicionar Testemunho</button>
        </form>
      </div>
      <div className="column-container">
        <div className="column">
          {items.map((item) => (
            <div className="box" key={item.index}>
              <div>
                <strong className='test'>{item.name}</strong>
                <p className="box-text">"{item.comment}"</p>
              </div>
              <div className="heartsandstars">
                <img src={item.index % 2 === 0 ? "star_selected.png" : "star.png"} alt="star" className="icon" />
                <img src={item.index % 2 === 1 ? "heart_selected.png" : "heart.png"} alt="heart" className="icon" />
              </div>
              <button onClick={() => handleDelete(item.index)} className="delete-button"><img src="trash_icon.png" alt="delete" className="delete-icon" /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonyPage;
