const fs = require('fs');
const path = require('path');

const saveContact = (req, res) => {
  const { name, email, message } = req.body;
  const filePath = path.join(__dirname, '../../contacts.json');

  const newContact = { name, email, message };
  let contacts = [];

  if (fs.existsSync(filePath)) {
    contacts = JSON.parse(fs.readFileSync(filePath));
  }

  contacts.push(newContact);
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

  res.send('Contact saved!');
};

module.exports = { saveContact };
