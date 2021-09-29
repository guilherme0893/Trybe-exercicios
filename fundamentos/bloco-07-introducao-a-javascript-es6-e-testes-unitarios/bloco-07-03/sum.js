// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// module.exports = sum;

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// module.exports = myRemove;

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// module.exports = myFizzBuzz;

// encodeDecode.js
// function mapString(objectMap, string) {
//   const splitString = string.split('');
//   const mappedArray = [];

//   for (let index = 0; index < splitString.length; index += 1) {
//     const character = splitString[index];
//     const mappedValue = objectMap[character];
    
//     if (mappedValue) {
//       mappedArray.push(mappedValue);
//     } else {
//       mappedArray.push(character);
//     }
//   }

//   return mappedArray.join('');
// }

// function encode(string) {
//   const map = {
//     a: 1,
//     e: 2,
//     i: 3,
//     o: 4,
//     u: 5,
//   };
//   return mapString(map, string);
// }

// function decode(string) {
//   const map = {
//     1: 'a',
//     2: 'e',
//     3: 'i',
//     4: 'o',
//     5: 'u',
//   };
//   return mapString(map, string);
// }

// const functions = { encode, decode };

// module.exports = functions;


function hydrate (string) {
  let splitString = string.split('');
  let copoAgua = 0

  for (let i = 0; i < splitString.lenght; i+=1) {

  }


}
const hydrate = require('./sum.js');

describe('Testa a função hydrate', () => {

  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
