const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', contactRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
