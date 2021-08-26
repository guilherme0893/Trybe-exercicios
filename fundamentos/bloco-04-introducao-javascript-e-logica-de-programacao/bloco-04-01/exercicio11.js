let salariobruto = 5000
let aliquota1 = salariobruto * (8/100);
let aliquota2 = salariobruto * (9/100);
let aliquota3 = salariobruto * (11/100);
const aliquota4 = salariobruto - 570.88;

let salariobase = undefined;

if (salariobruto<=1556.94){
    return console.log(salariobase = salariobruto - aliquota1)
} else if (salariobruto >= 1556.95 && salariobruto <= 2594.92){
    return console.log(salariobase = salariobruto - aliquota2)
} else if (salariobruto >= 2594.93 && salariobruto <= 5189.82){
    return console.log(salariobase = salariobruto - aliquota3)
} else{
    return console.log(salariobase = salariobruto - aliquota4)

}