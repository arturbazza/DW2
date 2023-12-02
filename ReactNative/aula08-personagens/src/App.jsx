import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import React from 'react';

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
      <h3>Personagens de Resident Evil ({familia})</h3>
      <ul>
        {filtrarPorFamilia.map(personagem => (
          <li key={personagem}>{personagem}</li>
        ))}
      </ul>
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
