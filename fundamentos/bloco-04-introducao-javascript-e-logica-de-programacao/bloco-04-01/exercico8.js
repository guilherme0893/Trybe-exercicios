const a = 341
const b = 93
const c = 87

let par = false

if (a%2 == 0 || b%2 ==0 || c%2 == 0){
    par = true
}
console.log(par)

// exercicio interessante para ver comoa let par recebe um valor
//  e depois do condicional if, se a condição for satisfeita, ela recebe um novo,
//  no caso receber par = true, dps console log imprime esse novo valor