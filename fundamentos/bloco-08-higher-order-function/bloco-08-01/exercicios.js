const wakeUp = () => {
  return 'Acordando!!'
};

const tomarCafe = () => {
  return 'Bora tomar café!!'
};

const returnString = () => {
  return 'Partiu dormir!!'
};

const doingThings = (callback) => {
  return callback()
};

console.log(doingThings(returnString));

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// const newEmployees = () => {
//   const employees = {
//     id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const createEmployee = (string) => {
//   let employeeEmail = string.split(' ').join('').toLowerCase();
//   let employeeObject = {
//     nomeCompleto: string,
//     email: `${employeeEmail}@trybe.com`,
//   }
//   return employeeObject;
// };

const createEmployee = (string) => {
  let employeeName = string.split(' ').join('').toLowerCase();
  const fullEmployee = {
    nomeCompleto: `${string}`,
    email: `${employeeName}@trybe.com`,
  }
  return fullEmployee
};
console.log(createEmployee('Guilherme Duarte'))

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(createEmployee));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const poolNumbers = () => {
  let numeroGerado = Math.floor((Math.random() * 5) + 1);
  return numeroGerado;
};

const poolResult = (number, callback) => {
  let numeroGerado = Math.floor((Math.random() * 5) + 1);

  if (number === callback(poolNumbers)) {
    return 'Parabéns você ganhou'
  } else {
    return 'Tente novamente'
  }
}
console.log(poolResult(2, poolNumbers()))

// console.log(poolNumbers());
// no gabarito ele pede para considerar um número escolhido pelo usário e tratar o comparativo como outra function

const poolResult = (number, callback) => {
  let numeroSorteado = Math.floor(Math.random() * (5 - 1) + 1);
  console.log(numeroSorteado);
  console.log(number);
  // console.log(numeroSorteado);
  // console.log(poolNumbers());
  if (numeroSorteado !== number) {
    return 'Tente novamente'
  } else {
    return 'Parabéns você ganhou'
  }
  // poderia usar um operador ternário com ? :
}
console.log(poolResult(2, poolNumbers));


// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
// o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) 
// e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
// Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (parametroA, parametroB, indicarUmParametro) => {
  let contador = 0;
  for (let index = 0; index < parametroA.length; index += 1) {
    // ter em mente que o indicarUmParametro(pa(...)A, pa(...)B) equivale ao checkAnswers (c, d);
    let checkReturn = indicarUmParametro(parametroA[index], parametroB[index]);
    contador += checkReturn;
  }
  return `Final score ${contador}`;
}

// repare que os parametros c d e sao um unico entre ( )
// em linhas gerais checkAnwersPoint = (checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, (RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]) !! 
const checkAnswersPoints = (checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, (c, d) => {
  if (c === d) {
    return 1;
  } if (d === 'N.A') {
    return 0
  }
  return -0.5
}));
console.log(checkAnswersPoints);
