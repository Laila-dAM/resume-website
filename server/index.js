const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { nome, email, mensagem } = req.body;
    
    const filePath = path.join(__dirname, 'mensagens.json');

    let mensagens = [];
    if (fs.existsSync(filePath)) {
        mensagens = JSON.parse(fs.readFileSync(filePath));
    }

    mensagens.push({ nome, email, mensagem, data: new Date() });

    fs.writeFileSync(filePath, JSON.stringify(mensagens, null, 2));

    res.send('Mensagem salva com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
