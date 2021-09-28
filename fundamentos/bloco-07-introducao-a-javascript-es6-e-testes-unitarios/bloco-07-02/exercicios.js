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

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // é possível definir internament as constantes para elas serem buscadas dentro do objeto original
  const endereço = order['adress'];
  const nome = order['name'];
  const entregaPessoa = order['order']['delivery']['deliveryPerson'];
  const telefone = order['phoneNumber'];
  const endereçoRua = order['address']['street'];
  const endereçoNumero = order['address']['number'];
  const endereçoApartamento = order['address']['apartment'];

  console.log(`Olá ${entregaPessoa}, entrega para: ${nome}, Telefone: ${telefone}, R. ${endereçoRua}, N° ${endereçoNumero}, AP: ${endereçoApartamento}`)
}

customerInfo(order);

const orderModifier = (order) => {
  const compradorNovo = order.name = 'Luiz Silva';
  // chamar pedido puramento colocando a posição 0 ou 1 não deu certo -- usar a técnica do object.keys que é melhor
  // porém é possível com o object.keys pegar os elementos em posições pq é um array (checar isso)
  const pedido = Object.keys(order.order.pizza);
  // console.log(pedido);
  const pedido1 = pedido[0];
  const pedido2 = pedido[1];
  const bebida = order['order']['drinks']['coke']['type'];
  const total = order.payment.total = '50';

  console.log(`Olá ${compradorNovo}, o total do seu pedido de ${pedido1}, ${pedido2} e ${bebida} e R$ ${total},00`)

}

orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionarTurnoDaNoite = (object, key, value) => {
  object[key] = value;
  
};

adicionarTurnoDaNoite(lesson2, 'turno', 'noite');

console.log(lesson2);

const listKeys = (object) => {
  console.log(Object.keys(object))
}

listKeys(lesson3);

const objectLength = (object) => {
  const keysArray = Object.keys(object);
  const arraySplice = keysArray.splice(' ')
  const sizeArray = arraySplice.length;
  console.log(sizeArray)

  // versão curta é só fazer um object keys e length de cara;
}

objectLength(lesson3);

const objectValues = (object) => {
  const values = Object.values(object) 
  console.log(values)
}

objectValues(lesson3);

// o {} faz parte da sintaxe -- funciona como destino, origem
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// const estudantes = Object.keys(allLessons);

// console.log(estudantes);

const countStudent = (object) => {
  let total = 0;
  const estudantes = Object.keys(object);
  // acessar os valores de cada chave chamada no const estudante via for para somar
  for (let index = 0; index < estudantes.length; index += 1) {
    total += object[estudantes[index]]['numeroEstudantes']
  }
  return total;
}
console.log(countStudent(allLessons));

// BONUS

const getMathStudents = (object) => {
  let alunosTotal = 0;
  // criar um array para receber as chaves materias para filtrar matematica
  let arrayMaterias = Object.keys(object);
  // console.log(arrayMaterias) --> pegou os 03 arrays
  for (index in arrayMaterias) {
    if (object[arrayMaterias[index]]['materia'] === 'Matemática') {
      // console.log(object[arrayMaterias[index]]['materia']) --> devolve as duas ocorrências presentes
      alunosTotal += object[arrayMaterias[index]]['numeroEstudantes'];
    }
  }
  return console.log(alunosTotal);
}

getMathStudents(allLessons);

// BONUS 02

const infoReport = (object, nome) => {
  let lessons = [];
  let studentsTotal = 0;
  const objectValues = Object.values(object);

  for (index in objectValues) {
    if (objectValues[index]['professor'] === nome) {
      lessons.push(objectValues[index]['materia'])
      studentsTotal = studentsTotal + objectValues[index]['numeroEstudantes']      
    }
  }
  return {
    lessons: lessons,
    students: studentsTotal,
  }
}

const createReport = (object, nome) => {
  const report = {};
  report.professor = nome;
  Object.assign(report, infoReport(allLessons, nome));
  return console.log(report)
}
createReport(allLessons, 'Maria Clara');
