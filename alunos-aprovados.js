function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i]; // Object Destructing - atribui os atributos arr[i].nota e arr[i].nome às variáveis nota e nome (atributos e variáveis de mesmo nome)

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C'
    }
];

console.log(alunosAprovados(alunos, 5));