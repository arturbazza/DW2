import React from 'react';
import Mensagem from './mensagem/mensagem';
import './mensagem/styles.css';

const App = () => {
  const mensagens = [
    { type: 'sent', status: 'viewed', content: 'Oi...' },
    { type: 'received', status: 'unread', content: 'Tu não me ama mais?' },
    { type: 'sent', status: 'viewed', content: 'Oi, boa tarde.' },
    { type: 'received', status: 'unread', content: 'Quem é você mesmo?' },
  ];

  return (
    <div className="chat">
      <div className="content">
        <ul>
          {mensagens.map((mensagem, index) => (
            <Mensagem
              key={index}
              type={mensagem.type}
              status={mensagem.status}
              content={mensagem.content}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
