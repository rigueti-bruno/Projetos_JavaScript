// Filtra Pares:

function filtraPares(arr) {
    return arr.filter(pares);
}

function pares(item) {
    return item % 2 === 0;
}

const meuArr1 = [1,23,55,67,30,2,4];

console.log(filtraPares(meuArr1));

// Filtra Impares:

function filtraImpares(arr) {
    return arr.filter(impares);
}

function impares(item) {
    return item % 2 !== 0;
}

const meuArr2 = [1,23,55,67,30,2,4];

console.log(filtraImpares(meuArr2));