const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
function addTech (evento) {
    let classTech = document.querySelector('tech');
    // opção de remover com className vazio
    // classTech.className = ''
    classTech.classList.remove('tech');
    evento.target.className = 'tech';
    // input.value = ''
}
firstLi.addEventListener('click', addTech);
secondLi.addEventListener('click', addTech);
thirdLi.addEventListener('click', addTech);
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
// tenho de chamar o querySelector mesmo, no exemplo anterior o classTech está dentro da função e só chama uma [0];
input.addEventListener('input', function(alterarTexto) {
let classeTech = document.querySelector('.tech');
classeTech.innerText = alterarTexto.target.value;
});
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
  let linkExterno = document.querySelector('#my-spotrybefy');
function duploCliqueRedireciona (evento) {
  window.location.replace('https://google.com')
};
linkExterno.addEventListener('dblclick', duploCliqueRedireciona);
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:
function mudarDeCor (evento) {
  let h3MeuTop = document.querySelector('#my-spotrybefy');
  h3MeuTop.style.color = 'red';
}
// myWebpage é uma constante que aqui serviu de coringa para a variável
// que eu havia definido dentro da função mudarDeCor;
myWebpage.addEventListener('mouseover', mudarDeCor);

function voltarCor (evento) {
  let h3MeuTop = document.querySelector('#my-spotrybefy'); 
  h3MeuTop.style.color = 'unset';
};
myWebpage.addEventListener('mouseout', voltarCor);

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.