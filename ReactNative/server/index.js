const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    setTimeout(() => {
        res.json([
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
    }, 1000);
});

app.listen(8080, () => {
    console.log('Servidor rodando');
});
