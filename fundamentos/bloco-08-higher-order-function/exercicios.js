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

const createEmployee = (string) => {
  let employeeEmail = string.split(' ').join('-');
  let employeeObject = {
    nomeCompleto: string,
    email: `${employeeEmail}@trybe.com`,
  }
  return employeeObject;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(createEmployee));

const poolNumbers = () => {
  let numeroGerado = Math.floor(Math.random() * (5 - 1) + 1);
  return numeroGerado;
};
// console.log(poolNumbers());
// no gabarito ele pede para considerar um número escolhido pelo usário e tratar o comparativo como outra function

const poolResult = (callback) => {
  let numeroSorteado = Math.floor(Math.random() * (5 - 1) + 1);
  // console.log(numeroSorteado);
  // console.log(poolNumbers());
  if (numeroSorteado !== poolNumbers()) {
    return 'Tente novamente'
  } else {
    return 'Parabéns você ganhou'
  }
  // poderia usar um operador ternário com ? :
}
console.log(poolResult(poolNumbers));

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
