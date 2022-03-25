const express = require("express");

const app = express();

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.post('/greetings', message);

function message(req, res) {
  const { name, age } = req.body;
  if (parseInt(age, 10) <= 17) {
    return res.status(401).send({ "message": `Unauthorized`});
  }
  res.status(200).send({ "message": `Hello, ${name}`});
};
