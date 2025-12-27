const fs = require('fs');
const path = require('path');

const saveMessage = (req, res) => {
    const { name, email, message } = req.body;
    const fileName = `${Date.now()}-message.json`;
    const filePath = path.join(__dirname, '../../messages', fileName);

    const data = { name, email, message, date: new Date() };
    
    fs.mkdirSync(path.join(__dirname, '../../messages'), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).send('Message saved successfully');
};

module.exports = { saveMessage };
