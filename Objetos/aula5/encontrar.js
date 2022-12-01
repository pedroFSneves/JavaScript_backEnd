const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
};

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "7919437785")

console.log(encontrado);
console.log(encontrado2);