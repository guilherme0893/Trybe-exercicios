let custo = 10
let venda = 25

let custototal = custo + (custo*1.20);

let lucro = (venda - custototal) * 1000;

if (custo < 0 || venda < 0){
    console.log('Atenção: valores precisam ser maiores ou iguais a zero')
} else {
    console.log('Voce lucrou ' + lucro)
}
