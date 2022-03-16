const { expect } = require("chai");
const fs = require('fs');
const sinon = require('sinon');

const escreverArquivo = require('../index');

describe('Executa a função escreverArquivo', () => {
  beforeEach(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  afterEach(() => {
    fs.writeFileSync.restore();
  });

  // it('a função recebe dois parametros', () => {
  //   const teste = escreverArquivo('arquivo.text');
  //   expect(teste).to.be.Arguments(null);
  // });
  it('a função deverá retornar uma string "ok"', () => {
    const teste = escreverArquivo('arquivo.txt', 'oi');
    expect(teste).to.be.equal('ok');
    expect(teste).to.be.a('string');
  })
})