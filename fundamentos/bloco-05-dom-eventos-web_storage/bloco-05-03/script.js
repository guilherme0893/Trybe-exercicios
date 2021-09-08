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

// Escreva seu código abaixo.
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth () {

let diasDoMes = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index +=1) {
    let dia = dezDaysList[index];
   //  o id days está inserido em uma UL, logo precisará dos Li
    let diaLista = document.createElement('li');

    if (dia === 24 | dia === 31) {
      diaLista.className = 'holiday';
      diaLista.innerHTML = dia;
      diasDoMes.appendChild(diaLista);
    } else if (dia === 4 | dia === 11 | dia === 18) {
      diaLista.className = 'friday';
      diaLista.innerHTML = dia;
      diasDoMes.appendChild(diaLista);
    } else if (dia === 25) {
      diaLista.className = 'day holiday friday'
      diasDoMes.innerHTML = dia;
      diasDoMes.appendChild(diaLista);
    } else {
      diaLista.innerHTML = dia;
      diaLista.className = 'day';
      diasDoMes.appendChild(diaLista)
    }
  };
};
 createDaysOfTheMonth ();

// exercicio 2

function criadorDeFeriado (Feriados) {
  let feriado = document.querySelector('.buttons-container');
}