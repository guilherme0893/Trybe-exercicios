function chooseState() {
    let states = document.getElementById('state')
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    // por ser uma lista de estados e será gerada uma lista, chamar o for
    for (let index = 0; index < stateOptions.length; index +=1 ) {
    // os elementos selecionados na posição index serão filhos que devem aparecer no option -- este nao foi criado ainda
    let option = document.createElement('option');
    // add o lenght de opções para o option
    // talvez o innettext nao precisa, apenas o value -- isso aqui no momento
    states.appendChild(option).innerText = stateOptions[index];
    states.appendChild(option).value = stateOptions[index];
    }
}

window.onload = function () {
    chooseState();
  }

//lembrar que essas opções -- no caos, o option -- só aparece conforme a página é carregada 
// o mesmo vale para os botões que só funcionam após o carregamento
// e lembrar que os dados coletados no form precisam ter um destino -- aí entram os botões de limpar e enviar
// chamar o window.onload, que vai fazer que tudo que precise ser carregado seja carregado conforme a pagina é carregada
window.onload = function() {
    chooseState();
    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', handleSubmit);

    let clearButton = document.querySelector('.clear-button');
    clearButton.addEventListener('click', clearFields);
}

// agora usar o preventDefault para bloquear o funcionamento padrão do botão e não carregar a pagina
function handleSubmit(event) {
    event.preventDefault();
    // para validar a data chama-se uma funçao validateData --- a seguir
    let validation = validateData();

    clearDivs();

    if (validation.erroQtd === 0) {
        renderData();
    } else {
        // unshift adiciona add elemento ao começo do array e retorna o novo length
        validation.messages.unshift('Dados Inválidos')

        renderErrorMessages(validation.messages)
    }
}

// data é de dado, não de data de dia/mes/ano
// essa function vai focar na validação dos dados inseridos no form

function validateData() {
    let validationList = {}
    // aqui é interessante porque ele vai atrás de um objeto chamado inputs onde estao alguns dados dos inputs
    for (let inputName in inputs) {
        let isValid = validateInput(inputName);
        // retorna true, false ou um objeto -- ver abaixo a function
        validationList[inputName] = isValid;
    }

    let counter = 0;
    let messages = [];

    for (let index in validationList) {
        if (validationList[index] === false) {
            counter += 1;
        }
        if (validationList[index].message) {
            counter += 1;
            messages.push(validationList[index].message)
        }
    }
    return {
        erroQtd: counter,
        messages,
    }
};

// criar uma função que vai checar as datas e os anos 
// validando começaria como false e apois a checagem ficaria como true
// o conceito de validate seria uma rotina para validar os dados que entram no input

function validateInput(inputName) {
    // cria variavel que pegar o na
    let inputType = inputs[inputName].type
    // entender o que quer dizer isso tudo ai 
    let input = document.querySelector('[name =$ {inputName}]')

    if (inputType) {
        let validationFunction = validationStrategies[inputType];
        return validationFunction(input, inputName);
    }
    return validationStrategies.default(input, inputName)
}

let validationStrategies = {
    // atenção ao objeto pq a cada chave uma função é atribuída, porém ela não é chamada pq não tem o ();
    // isso aqui é para checar qual chave corresponde ao tipo do input
    // o retorno do if é exatamente isso aqui, tendo as funções executadas
    default: defaultValidation,
    date: dateValidation,
    select: selectValidation,
    radio : radioValidation,
}

function defaultValidation(input, name) {
    let trimmed = input.value.trim();
    let validation = inputs[name];

    if (validation.required && trimmed.length === 0) {
        return false;
    }

    if (validation.maxLength && trimmed.length > validation.maxLength) {
        return false;
    }

    return true;
}

// acho que é melhor segregar essa function

function validateDay() {
  if ()
}
function dateValidation(input, name){
  if(input.value.length === 0){
    return {
      message: 'A data não foi preenchida!'
    }
  }
  
  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
  if(!regex.test(input.value)){
    return {
      message: 'Data: Formato inválido'
    };
  }
  
  let splitted = input.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];
  
  if(day < 0 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }
  
  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }
  
  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }
  
  return true;
}

function getSelectedOption(select){
  return select.options[select.selectedIndex];
}
  
function selectValidation(select, name){
  let option = getSelectedOption(select);
  let validation = inputs[name];
  
  if(validation.required && (!option || option.disabled)){
    return false;
  }
  
  return true;
}

function radioValidation(radio, name){
  let checked = document.querySelector(`[name=${name}]:checked`)
    
  if(checked === null){
    return false;
  }
  
  return true;
}

let counter = 0;
let messages = [];

for(let index in validationsList){
  if(validationsList[index] === false){
    counter += 1;
  }

  if(validationsList[index].message){
    counter += 1;
    messages.push(validationsList[index].message);
  }
}

return {
  errorQtd: counter,
  messages,
}

function clearDivs(){
  let errorDivs = document.querySelectorAll('.error');
  
  for(div of errorDivs){
    div.remove();
  }
  
  let dataDiv = document.querySelector('.data');
  
  if(dataDiv){
    dataDiv.remove();
  }
 }

  // if(validation.errorQtd === 0){
  //   renderData();
  // } else {
  //   validation.messages.unshift('Dados Inválidos')

  //   renderErrorMessages(validation.messages)
  // }

let inputs = {
    name: {
        maxLength: 40,
        required: true,
    },
    email: {
        maxLength: 50,
        required: true,
    },
    cpf: {
        maxLength: 11,
        required: true,
    },
    adress: {
        maxLength: 200,
        required: true,
    },
    city: {
        maxLength: 28,
        required: true,
    },
    state: {
        // entender o porquê desse type aqui
        type: 'select',
        required: true,
    },
    houseType: {
        // ok, é type radio pq é um input diferente
        type: 'radio',
        required: true,
    },
    resume: {
        maxLength: 1000,
        required: true,
    },
    role: {
        maxLength: 40,
        required:true,
    },
    roleDescription: {
        maxLength: 500,
        required: true,
    },
    startDate: {
        // pq é type date -- só porque seria um input de data?
        type: 'date',
        required: true,
    }
}
