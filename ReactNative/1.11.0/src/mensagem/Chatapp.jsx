// import React, { useState } from 'react';
// import Button from '../Button';
// import Message from './message';

// const ChatApp = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, text: 'Oi...', status: 'sent' },
//     { id: 2, text: 'Tu não me ama mais?', status: 'received', viewed: false },
//   ]);

//   const mensagemVista = (messageId) => {
//     const updatedMessages = messages.map((message) =>
//       message.id === messageId ? { ...message, viewed: true } : message
//     );
//     setMessages(updatedMessages);
//   };

//   return (
//     <div className="chat">
//       { }
//       {messages.map((message) => (
//         <Message
//           key={message.id}
//           text={message.text}
//           status={message.status}
//           viewed={message.viewed}
//           onViewed={() => mensagemVista(message.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default ChatApp;
