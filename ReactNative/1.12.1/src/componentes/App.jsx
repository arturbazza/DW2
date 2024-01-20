import React from 'react';
import Button from './Button';
import Message from './Message';
import './App.css';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [mensagens, setMensagens] = React.useState([
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
    {
        mensagem: 'Eu não lembro...',
        visualizado: false,
        remetente: true,
    },
]);

  return (
    <div className="chat">
      <div className="header">
        <Button />
        <h3>Meu Chat</h3>
      </div>
      <div className="content">

        {loading === true && (
          <div>
            <div className='skeleton-loader'></div>
            <div className='skeleton-loader'></div>
            <div className='skeleton-loader'></div>
          </div>
        )}
        {
          loading === false && (
            <ul>
              {
                mensagens.map(mensagem => (
                  <Mensagem
                    mensagem={mensagem.mensagem}
                    visualizado={mensagem.visualizado}
                    remetente={mensagem.remetente}
                  />
                )
                )
              }

            </ul>
          )
        }

      </div>
    </div>
  );
};

export default App;


