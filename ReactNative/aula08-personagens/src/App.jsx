import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Personagens = ({ familia }) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];
  
  const filtrarPorFamilia = personagens.filter(personagem => personagem.includes(familia));

  return (
    <div>
      <h2>Personagens de Resident Evil</h2>
      <span>Filtro "família": <b>{familia}</b></span>
      <span>
        {filtrarPorFamilia.map(personagem => (
          <p key={personagem}> - {personagem}</p>
        ))}
      </span>
    </div>
  )
}

function App() {
  return (
    <>
    <div>
      {}
      <Personagens familia="Redfield" />
    </div>
    </>
  );
  
}

export default App;
