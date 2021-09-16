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
    // states.appendChild(option).value = stateOptions[index];
    }
}

//lembrar que essas opções -- no caos, o option -- só aparece conforme a página é carregada 
// o mesmo vale para os botões que só funcionam após o carregamento
// e lembrar que os dados coletados no form precisam ter um destino -- aí entram os botões de limpar e enviar
// chamar o window.onload, que vai fazer que tudo que precise ser carregado seja carregado conforme a pagina é carregada
window.onload = function() {
    chooseState();
    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', submit);

    let clearButton = document.querySelector('.clear-button');
    clearButton.addEventListener('click', clear);
}

// agora usar o preventDefault para bloquear o funcionamento padrão do botão e não carregar a pagina
function submit(event) {
    event.preventDefault();
    // para validar a data chama-se uma funçao validateData --- a seguir
    let validation = validateData();

    clearDivs();
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
