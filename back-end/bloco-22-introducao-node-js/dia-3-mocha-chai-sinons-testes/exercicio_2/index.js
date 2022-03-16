const fs = require('fs');

module.exports = (arquivo, conteudo) => {
  // necessário fazer como se fosse o caminho do arquivo
  fs.writeFileSync(`${__dirname}/${arquivo}`, conteudo);
  return 'ok';
};
