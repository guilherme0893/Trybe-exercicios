const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('IT IS ALIVE!');
});

const port = process.evv.PORT || 3000;

app.listen(port);

console.log(`Escutando na porta ${port}`);
