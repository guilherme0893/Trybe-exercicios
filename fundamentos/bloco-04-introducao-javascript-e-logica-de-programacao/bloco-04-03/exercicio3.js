let n =5;
let simbolo = "*";
let linha ="";
let espaço = "_"
let posicao = n

for (let indexlinha = 0; indexlinha < n; indexlinha +=1){
    for (let indexcoluna = 0; indexcoluna <=n; indexcoluna +=1){
        if (indexcoluna < posicao){
            linha = linha + " ";
        } else {
            linha = linha + simbolo;
        }
    }
    console.log(linha);
    linha ="";
    posicao -= -1
};

