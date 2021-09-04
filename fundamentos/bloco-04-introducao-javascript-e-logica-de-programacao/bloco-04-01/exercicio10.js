let custo = 30
let venda = 40

if (custo <= 0 || venda < 0){
    console.log('Atenção: valores precisam ser maiores ou iguais a zero')
} else {
    let custototal = custo *1.20;
    let lucro = (venda - custototal) * 1000;
    console.log('Voce lucrou ' + lucro)
};
