// Criando o Map:

const usuarios = new Map();

// Populando o Map:

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

// Criando a Função:

function getAdmins(map) {
    let admins = [];

    for ([key,value] of map) { // [key,value] - itera por cada entrada do map
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

// Executando a função:

console.log(getAdmins(usuarios));