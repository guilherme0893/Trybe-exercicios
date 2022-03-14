const readline = require('readline-sync');

let data = {
  distance: 0,
  time: 0,
};

const inputInformation = () => {
  data.distance = readline.question('Qual a distância em km?');
  data.time = readline.questionInt('Qual o tempo em horas?');
}

module.exports = {
  data,
  inputInformation,
}