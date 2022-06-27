function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.` 
}

let person1 = {
    nome: 'Bruno',
    idade: 35
    };

let person2 = {
        nome: 'Lamy',
        idade: 61
    };

let pessoa1 = {
    nome: 'Maria',
    idade: 30
    };

let pessoa2 = {
    nome: 'Carla',
    idade: 26
    };

let animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'pug'
    };

// Método Call:
console.log(calculaIdade.call(person1, 5));
console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(animal, 7));

// Método Apply:
console.log(calculaIdade.apply(person2, [5]));
console.log(calculaIdade.apply(pessoa1, [4]));