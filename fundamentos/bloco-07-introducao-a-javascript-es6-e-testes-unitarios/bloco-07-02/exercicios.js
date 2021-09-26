const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const objectItems = (object) => {
  // cria o array com as keys/chaves
  const keys = Object.keys(object);
  console.log(keys)
  // não há um objeto com um array de chaves
  console.log(object[keys])
  for (index in keys) {
    // ele acessa uma key em uma posição index 
    console.log(keys[index])
    // acessa o value de uma key do objeto especificado
    console.log(object[keys[index]])
    console.log(`${keys[index]}, Grau: ${object[keys[index]]}`);
  }
};
objectItems(student1);
