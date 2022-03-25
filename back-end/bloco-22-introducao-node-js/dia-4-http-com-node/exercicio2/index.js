const express = require("express");
// const bodyParser = require('body-parser');
// const router = express.Router();

const app = express();

// app.use(bodyParser.json());

const teste = ['oi', 'Guilherme']

app.get('/hello', oi);

function oi(req, res) {
  return res.status(200).json(teste);
};

app.post('/hello', hello);

function hello(req, res) {
  teste.push('tudo bem?');
  return res.status(201).json('e aí?!');
};

app.listen(3001, console.log('Ouvindo a porta 3001'));
