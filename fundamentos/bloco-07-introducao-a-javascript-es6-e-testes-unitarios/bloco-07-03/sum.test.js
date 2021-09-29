// const sum = require('./sum.js');

// test('sums two values', () => {
//   expect(sum(4, 5)).toBe(9)
// });

// describe('test sum function, () => {
//   it('must return the sum of two values', () => {
//     expect(sum(4, 5)).toBe(9);
//     expect(sum(0, 0)).toBe(0);
//   })
//   it('must throw an error if any parameter is a string', () => {
//     expect(() => sum(4, '5')).toThrowError();
//     expect(() => sum(4, '5')).toThrowError("parameters must be numbers");
//   })
// })

// const myRemove = require('./sum.js');

// describe('test myRemove function', () => {
//   it('must return an array without the selected item', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
//   })
// })

// const myFizzBuzz = require('./sum.js');

// describe('test myFizzBuzz function, () => {
//   it('must return a string based on a division', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//     expect(myFizzBuzz(3)).toBe('fizz');
//     expect(myFizzBuzz(25)).toBe('buzz');
//     expect(myFizzBuzz(4)).toBe(4);
//     expect(myFizzBuzz('a')).toBe(false)
//   })  
// })

// const { encode, decode } = require('./sum.js');

// describe('tests encode and decode functions', () => {
//   it('encode is defined', () => {
//     // repare que no It está claro encode é definido, temos de estar sua funcionalidade
//     expect(encode).toBeDefined();
//   });
//   // se está definido é uma function?
//   it('encode is a function', () => {
//     expect(typeof encode).toEqual('function')
//   })
//   // como na function tem uma série de condições, elas sao chamadas individualmente
//   it('enconde turns a into 1', () => {
//     expect(encode('a')).toEqual('1');
//   })
//   it('enconde turns e into 2', () => {
//     expect(encode('e')).toEqual('2');
//   })
//   it('enconde turns i into 3', () => {
//     expect(encode('i')).toEqual('3');
//   })
//   it('enconde turns o into 4', () => {
//     expect(encode('o')).toEqual('4');
//   })
//   it('enconde turns u into 5', () => {
//     expect(encode('u')).toEqual('5');
//   })
//   it('decode is defined', () => {
//     expect(decode).toBeDefined();
//   })
//   it('decode is a function', () => {
//     expect(typeof decode).toEqual('function')
//   })
//   it('decode turns 1 into a', () => {
//     expect(decode('1')).toEqual('a');
//   })
//   it('decode turns 2 into e', () => {
//     expect(decode('2')).toEqual('e');
//   })
//   it('decode turns 3 into i', () => {
//     expect(decode('3')).toEqual('i');
//   })
//   it('decode turns 4 into o', () => {
//     expect(decode('4')).toEqual('o');
//   })
//   it('decode turns 5 into u', () => {
//     expect(decode('5')).toEqual('u');
//   })
// })

const hydrate = require('./sum.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
