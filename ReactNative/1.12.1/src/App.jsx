import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';
import Button from './components/Button';
import SVG from "./assets/react.jsx";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      setMessages([
        {
          mensagem: 'Oi...',
          visualizado: true,
          remetente: false,
        },
        {
          mensagem: 'Tu não me ama mais?',
          visualizado: true,
          remetente: false,
        },
        {
          mensagem: 'Oi, boa tarde.',
          visualizado: false,
          remetente: true,
        },
        {
          mensagem: 'Quem é você mesmo?',
          visualizado: false,
          remetente: true,
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="chat">
        <h1>Chat Artur</h1>
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message.mensagem}
            remetente={message.remetente}
            visualizado={message.visualizado}
            onClick={() => {
              console.log('Mensagem clicada');
            }}
          />
        ))}
        <Button
          icon={SVG.send}
          onClick={() => {
            console.log('Mensagem enviada');
          }}
        />
      </div>
    </div>
  );
}

export default App;