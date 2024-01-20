const express = require('express');
const app = express();
const port = 8080;

const mensagens = [
    { mensagem: 'Oieee...', visualizado: true, remetente: false },
    { mensagem: 'Tu não me ama mais?', visualizado: true, remetente: false },
    { mensagem: 'Oi, boa tarde.', visualizado: false, remetente: true },
    { mensagem: 'Quem é você mesmo?', visualizado: false, remetente: true },
    { mensagem: 'Eu não lembro...', visualizado: false, remetente: true },
];

app.get('/mensagens', (req, res) => {
    res.json(mensagens);
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
