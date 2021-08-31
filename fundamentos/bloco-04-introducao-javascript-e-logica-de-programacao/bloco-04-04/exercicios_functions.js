// let array1 = [2,3,6,7,10,1];

// function findMaxValue(array){
//     let valorMax = array[0]
//     let indice = 0
//     for (let index = 0; index <= array.length; index +=1){
//         if (array[index] > valorMax){
//             valorMax = array[index]
//             indice = valorMax[index]
//         }
//     } return indice
// }
// console.log(findMaxValue(valores));

let array1 = [2,3,6,7,10,1];

function findIndex(valores){
    let indice = 0
    for (let i in valores){
        if (valores[indice] < valores[i]){
            indice = i
        }
    }
    return indice
};
console.log(findIndex(array1))

let array2 = [2,4,6,7,10,0,-3];

function findLowerValueIndex (array){
    let indice = 0;
    for (let i in array){
        if (array[indice] > array[i]){
            indice = i
        }
    }
    return indice
}
console.log(findLowerValueIndex(array2));

let nomes = ['José','Lucas','Nádia', 'Fernanda', 'Cairo','Joana'];

function maiorNome([nomes]){
    let maiorNome = nomes[0];
    for (let indice in nomes){
        if (maiorNome.length < nomes[indice].length){
            maiorNome = nomes[indice];
        }
    } 
    return maiorNome;
}
console.log(maiorNome([nomes]));

let array3 = [2,3,2,5,8,2,3];
function somaInteiros(numero){
    let soma = 0
    for (let index = 1; index <= numero; index+=1){
        soma = soma + index;
    } return soma
}
console.log(somaInteiros(25));


// let contador = 0;
// let numeroRepetido = 0;
// let comparador = array3[0];

// function contadorRepeticao (array3){
//     for (let index = 0; index < array3.length; index +=1){
//     if (array3[index]===array3[0]){
//         contador = contador + 1;
//     } 
//     console.log(contador)
// }
// }
// console.log(contadorRepeticao(array3))



