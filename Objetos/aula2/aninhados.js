const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1144444440"],
};

cliente.endereço = {
    rua: "R. Renato Augusto",
    numero: 1234,
    apartamento: true,
    complemento: "ap 403",
};

console.log(cliente["endereço"]);