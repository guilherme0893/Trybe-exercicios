let array2 = [2,4,6,7,10,0,-3];
function findLowerValueIndex (array){
    let indice = 0;
    for (let i in array){
        if (array[indice] < array[i]){
            indice = i
        }
    }
    return indice
}
console.log(findLowerValueIndex(array2));