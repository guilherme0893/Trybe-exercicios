const express = require("express");

const app = express();

app.listen(3001, () => console.log('App ouvindo a porta 3001'));

app.put('/users/:name/:age', funcao);

function funcao(req, res) {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos`});
};
