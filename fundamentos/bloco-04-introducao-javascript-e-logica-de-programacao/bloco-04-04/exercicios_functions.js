let array1 = [2,3,6,7,10,1];

let valorMax = array1[0];

let indice = 0

function findMaxValue(){
    for (let index = 0; index <= array1.length; index +=1){
        if (array1[index] > valorMax){
            valorMax = array1[index]
            indice = valorMax[index]
        }
    } return indice
}
console.log(findMaxValue(array1));

function findIndex(){
    let indice = 0
    for (i in array1){
        if (array1[indice] < array1[i]){
            indice = i
        }
    }
    return indice                                                                                                                                                              )
};


let array1 = [2,3,6,7,10,1];

let indice = 0

function findIndex(array){
    let indice = 0
    for (i in array){
        if (array[indice] < array[i]){
            indice = i
        }
    }
    return indice
}
console.log(findIndex(array1));

let array2 = [2,4,6,7,10,0,-3];
let indice = 0;


function findLowerValueIndex (array){
    for (i in array){
        if (array[indice] > array[i]){
            indice = i
        }
    }
    return indice
}
console.log(findLowerValueIndex(array2));

let nomes = ['José','Lucas','Nádia', 'Fernanda', 'Cairo','Joana'];
let indice = 0;

function maiorNome() {
    let maiorNome = [][0];
    for (let indice in []){
        if (maiorNome.length < [][indice].length){
            maiorNome = [][indice];
        }
    } 
    return maiorNome;
}
console.log(maiorNome([nomes]));

let array3 = [2,3,2,5,8,2,3];
let contador = 0;
let comparador = array3[0];

function contadorRepeticao (array3){
    for (let index = 0; index >= array3.length; index +=1){
    if (array3[index]===array3[0]){
        contador = contador + 1;
    } 
    console.log(contador)
}
}
console.log(contadorRepeticao(array3))