const { expect } = require('chai');

const teste = require('../index');

describe('a função returnPosiviteOrNegative', () => {
  it('o parametro deve ser do tipo number', () => {
    const answer = teste('a');
    expect(answer).to.be.equal('O parâmetro deve ser um número');
  })
  it('retorna uma string "Positivo" se o parametro é maior do que 0', () => {
    const answer = teste(1);
    expect(answer).to.be.a('string');
    expect(answer).to.be.equal('Positivo');
  });
  it('retorna uma string "Negativo" se o parametro é menor do que 0', () => {
    const answer = teste(-1);
    expect(answer).to.be.a('string');
    expect(answer).to.be.equal('Negativo');
  });
  it('retorna uma string "Neutro" se o parametro é igual a 0', () => {
    const answer = teste(0);
    expect(answer).to.be.a('string');
    expect(answer).to.be.equal('Neutro');
  });
});
