let jogadora = {
    name : 'Marta', 
    lastName :'Silva',
    age : 34,
    medals : {
        golden : '2',
        silver : '3'
    }
}

jogadora['fullName'] = jogadora['name'] + " " + jogadora['lastName']
jogadora['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(jogadora)

console.log('A jogadora '+ jogadora['fullName'] + ' tem ' + jogadora['age'] + ' anos.')

// console.log('A jogadora '+jogadora['fullName']+' foi eleita a melhor do mundo por '+ jogadora['bestInTheWorld'].lenght +' vezes.')

console.log('A jogadora possui '+ jogadora.medals.golden + ' medalhas de ouro e '+ jogadora.medals.silver +' medalhas de prata');


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
};

for (let i in names){
    console.log('Olá '+ names[i] );
};

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let index in car){
    console.log(index, car[index])
}

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda, '+ info['personagem'])

info['recorrente'] = 'sim'

console.log(info['recorrente'])

for (let key in info){
    console.log(key)
}

for (let key in info){
    console.log(info[key])
}
