function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

const numeros = [1,2];

console.log('this -> maçã', mapComThis(numeros, maca));

console.log('this -> laranja', mapComThis(numeros, laranja));