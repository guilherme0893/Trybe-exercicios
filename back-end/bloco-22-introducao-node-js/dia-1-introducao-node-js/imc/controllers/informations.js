const readline = require('readline-sync');

let data = {
  weigth: 0,
  height: 0,
  name: '',
};

const inputInformation = () => {
  data.name = readline.question('Qual o seu name?');
  data.weigth = readline.questionFloat('Qual o seu peso?');
  data.height = readline.questionFloat('Qual a sua altura?');
}

module.exports = {
  data,
  inputInformation,
}