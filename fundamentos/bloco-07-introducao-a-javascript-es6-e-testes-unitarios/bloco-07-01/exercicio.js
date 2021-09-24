const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numbersArray = () => {
  
  return oddsAndEvens.sort(function(a, b) {
    return a - b;
  })
}

const sortedNumbers = numbersArray(oddsAndEvens)

console.log(`Os números ${sortedNumbers} se encontram ordenados de forma crescente!`);

// houve problemas no sorting e foram resolvidos via o link https://stackoverflow.com/questions/48082009/array-sort-is-not-working-correctly-in-javascript

const fatorial = (n) => {
  let numeroBase = 1

  for (let index = 1; index <= n; index +=1) {
    numeroBase = numeroBase * index
  }
  return numeroBase
}
console.log(fatorial(4));

// const factorial = (numero) => (
//   numero >=0 ? numero = numero * numero -1 : 0
// );
// console.log(factorial(5))

const longestWord = (array) => {
  let splitWord = array.split(' ');
  let maxLength = 0;
  let longestWordFound = ''

  for (const words of splitWord) {
    if (words.length > maxLength) {
      maxLength = words.length
      longestWordFound = words
    }
  }
  return longestWordFound
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// const maiorPalavra = array => array.split(' ')

// const acharX = string => {
//   if (string.includes('x')) {
//     let nova = ''
//     nova = string.replace ('x', 'Bebeto')
//     return nova
//   }
// }
// console.log(acharX('Tryber x aqui!'))

// const acharString = string => string.replace('x', 'nome')
// console.log(acharString('Tryber x aqui!'))
// ate serviria mas nao é isso que eles querem
