const express = require('express');

const app = express();

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/ping', message);

function message(req, res) {
  res.status(200).json({ "message": "pong"});
};
