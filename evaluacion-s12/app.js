const express = require('express');
const app = express();

const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());
app.use('/items', itemRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});