function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sáado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// exercicio 2

// Escreva seu código abaixo.

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31];
function criarDias() {
let dias = document.querySelector('.week-days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  // manter esse cara aqui porque é do for?
  let dia = dezDaysList[index];
  // tentar por para fora essa variável!!!!
  let diaLi = document.createElement('li');
  // realizar o appendchild para fora tb?
  dias.appendChild(diaLi);
  diaLi.innerText = dia;
  if (dia === 24 || dia === 31) {
    diaLi.className = 'day holiday';
  } else if (dia === 4 || dia === 11 || dia === 18) {
    diaLi.className = 'day friday';
  } else if (dia === 25) {
    diaLi.className = 'day holiday friday';
  } else {
    diaLi.className = 'day'
  }
 }
};
criarDias();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function criarFeriado (button) {
  let botao = document.createElement('button');
  let botaoId = 'btn-holiday';
  // criar variavel onde está inserida a class buttons-container, que é o pai;
  let containerBotao = document.querySelector('.buttons-container');

  botao.id = botaoId;
  botao.innerHTML = button;
  containerBotao.appendChild(botao);
};
criarFeriado('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function criarSexta (button) {
  let botaoSexta = document.createElement('button');
  let botaoSextaId = 'btn-friday';
  // como terá de ser adicionado, precisará de um pai, que é -- ademais, ela será irmão ao exercicio 2
  let containerBotaoSexta = document.querySelector('.buttons-container');

  botaoSexta.id = botaoSextaId;
  botaoSexta.innerHTML = button;
  containerBotaoSexta.appendChild(botaoSexta)
}
criarSexta('Sexta-feira');

// Exercício 5
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar 
// e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// function mouseOver () {  
//   let diasZoom = document.querySelectorAll('.day');
//   diasZoom.addEventListener('mouseover',function(event) {
//     event.target.style.fontSize = '30px';
//     event.target.style.fontWeight = '600';
//   })
// };
// function mouseOut () {
//   let diasZoom = document.querySelectorAll('.day');
//   diasZoom.addEventListener('mouseout', function(event) {
//   event.target.style.fontSize = '20px';
//   event.target.style.fontWeight = '200';    
//   })
// };
// mouseOver();
// mouseOut();

// Exercício 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como 
//parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" 
function creatTask (task) {
  let containerTarefa = document.querySelector('.my-tasks');
  let nomeTarefa = document.createElement('span');
  
  nomeTarefa.innerHTML = task;
  containerTarefa.appendChild(nomeTarefa);
};
creatTask('Estudar');

// Exercício 8
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
// Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function criaCorTask(cor) {
  let containerTasks = document.querySelector('.my-tasks');
  let novaTagDiv = document.createElement('div');

  novaTagDiv.className = 'task'
  novaTagDiv.style.backgroundColor = cor
  containerTasks.appendChild(novaTagDiv);
};
criaCorTask('red');

// function criadorDeFeriado (Feriados) {
//   let feriado = document.querySelector('.buttons-container');
// }