function soma(a,b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a + b;
    }
    return 'Dados de tipo inválido.'
}

console.log(soma(4,6));
console.log(soma('a', 'b'));