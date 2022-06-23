function substituirPares (array) {
    if (!array) return -1; // nulo
    if (!array.length) return -1; // array vazio

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero!");
        }
        else if (array[i]%2 === 0) {
            array[i] = 0;
        }
    }
    return array;
}

let array = [1,3,4,6,80,33,23,90] // array com valores
console.log(substituirPares(array));

let vazio = [] // array vazio
console.log(substituirPares(vazio));

let nulo = null; // array nulo
console.log(substituirPares(nulo));