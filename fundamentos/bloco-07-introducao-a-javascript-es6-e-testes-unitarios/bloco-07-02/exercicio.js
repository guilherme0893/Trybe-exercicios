const array =  [1,2,3,4,5,6,7,8,9,10];

function pares(numeros) {
  let arrayPares = [];

  for (let index = 0; index < numeros.length; index +=1) {
    if (numeros[index] % 2 === 0) {
      arrayPares.push(numeros[index])
    }
  }
  return arrayPares
};
console.log(pares(array));

// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
  {
  city: 'Belo Horizonte',
  state: 'Minas Gerais',
  },
  {
  city: 'Salvador',
  state: 'Bahia',
  },
  {
  city: 'Porto Alegre',
  state: 'Rio Grande do Sul',
  },
  {
  city: 'Manaus',
  state: 'Amazonas',
  }
  ];

  // Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
  {
  city: 'Belo Horizonte',
  state: 'Minas Gerais',
  },
  {
  city: 'Salvador',
  state: 'Bahia',
  },
  {
  city: 'Porto Alegre',
  state: 'Rio Grande do Sul',
  },
  {
  city: 'Manaus',
  state: 'Amazonas',
  }
  ];
  
  function buildCitiesArray(array) {
  const cityState = [];
  for (let i = 0; i < citiesAndStates.length; i += 1) {
  const city = (Object.values(citiesAndStates[i]));
  cityState.push(`${city[0]} - ${city[1]}`);
  }
  return cityState;
  }
  
  console.log(buildCitiesArray(citiesAndStates)); 
  
// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que 18, falso caso contrário
// Ex: [20, 30, 19, 1, 50] => resultado esperado: false
// Ex: [20, 30, 19, 19] => resultado esperado: true

function allGreaterThanEighteen(x, array) {
  let counter = 0
  for (let index = 0; index < array.length; index +=1) {
    if (array[index] >x) {
      counter += 1
    } 
  } if (counter === array.length) {
    return true
  } else {
    return false
  } 
}

console.log(allGreaterThanEighteen(1,[20, 30, 19, 1, 50]));
console.log(allGreaterThanEighteen(15, [20, 30, 19, 19]));

// Desenvolva uma função que recebe como primeiro parâmetro um array contendo objetos com cidades e estados. 
// Como segundo parâmetro ela recebe o nome de um estado.
// A função deverá retornar o primeiro objeto que contenha a propriedade state igual ao nome do estado recebido por parâmetro 

// Exemplo do array
const citiesAndStates = [
{
city: 'Belo Horizonte',
state: 'Minas Gerais',
},
{
city: 'Salvador',
state: 'Bahia',
},
{
city: 'Porto Alegre',
state: 'Rio Grande do Sul',
},
{
city: 'Ponta Grossa',
state: 'Paraná',
},
{
city: 'Manaus',
state: 'Amazonas',
},
{
city: 'Vitória da Conquista',
state: 'Bahia',
},
{
city: 'Curitiba',
state: 'Paraná',
},
]

function getCityByState(array, state) {
  for (let i = 0; i < array.length; i += 1) {
  if (state === array[i]['state']) {
  return array[i];
  }
  }
  }
  
  console.log(getCityByState(citiesAndStates, 'Paraná')); 

// Caso a função receba o array acima como primeiro parâmetro e a string 'Paraná' no parâmetro state, o resultado esperado é o objeto:
// { city: 'Ponta Grossa', state: 'Paraná' }

// Caso a função receba o array acima como primeiro parâmetro e a string 

// Desenvolva uma função que recebe um array e retorna a soma de todos os números desse array
// Ex:
// array: [2, 3, 4, 6, 8, 12, 24]
// resultado esperado: 59

function sumAllNumbers(array) {
  let soma = 0;
  for (let index = 0; index < array.length; index +=1) {
    soma += array[index]
  }
  return soma
}
console.log(sumAllNumbers([2, 3, 4, 6, 8, 12, 24, 4545345, 543]));

function somaImpar(array) {
  let soma = 0;
  let soma2 = 0;
  for (let index = 0; index < array.length; index +=1) {
    if (array[index] % 2 !== 0 ) {
      soma += array[index]
    }
    else {
      soma2 += array[index]
    }
  }
  return `A soma dos números pares é ${soma2} e a soma dos números ímpares é ${soma}`
}
console.log(somaImpar([2, 3, 4, 6, 8, 12, 24]));
