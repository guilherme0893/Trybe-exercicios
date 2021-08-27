let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0 


for (let index = 0; index < numbers.length; index +=1){
    soma = soma + numbers[index];
}
console.log(soma)

let media = soma / numbers.length;

for (let index=0; index>numbers.length; index+1){
  l(soma / numbers.length)
 }
console.log(media)

let max = numbers[0];

for (let index=0; index < numbers.length; index+=1){
    if (numbers[index]>max){
        max = numbers[index];
    }
}
console.log(max);

let min = numbers[0];

for (let index=0; index < numbers.length; index+=1){
    if (numbers[index]<min){
        min = numbers[index];
    }
}
console.log(min);

let impar = 0;

for (let index = 0; index < numbers.length; index+=1){
    if (numbers[index]%2 !== 0){
        impar = impar + 1
    } 
} if(impar===0) {
    console.log('Não há valores impares')
} else {
    console.log('Há '+impar+' numero(s) ímpar(es)')
}

let array =[];

for (let index=1; index <=25; index+=1){
    array.push(index);
}
console.log(array);

for (let a =0; a < array.length; a = a +1){
    console.log(array[a] / 2)
};