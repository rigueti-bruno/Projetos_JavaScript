const myArray = [30,30,40,5,223,2049,3034,5];

// Construindo a função:

function valoresUnicos(arr) {
    const mySet = new Set(arr); // converte o array em set eliminando os duplicados

    return [...mySet]; // converte o Set em array com a propriedade spread (...)
}

// Executando a função:

console.log(valoresUnicos(myArray));