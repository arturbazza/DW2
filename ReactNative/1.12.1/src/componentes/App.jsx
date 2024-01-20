import React, { useEffect, useState } from 'react';
import Button from './Button';
import Message from './Message';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {

    const fetchMensagens = async () => {
      try {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json();
        setMensagens(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar mensagens:', error);
      }
    };

    fetchMensagens();
  }, []);

  return (
    <div className="chat">
      <div className="header">
        <Button />
        <h3>Chat Artur</h3>
      </div>
      <div className="content">
        {loading === true && (
          <div>
            <div className='skeleton-loader'></div>
            <div className='skeleton-loader'></div>
            <div className='skeleton-loader'></div>
          </div>
        )}
        {loading === false && (
          <ul>
            {mensagens.map((mensagem, index) => (
              <Message
                key={index}
                text={mensagem.mensagem}
                status={mensagem.visualizado ? 'lido' : 'nlido'}
                sender={mensagem.remetente ? 'eu' : ''}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
