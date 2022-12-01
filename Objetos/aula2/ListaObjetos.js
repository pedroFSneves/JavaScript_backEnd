const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1144444440"],
};

cliente.endereços = [
    {
    rua: "R. Joseph Climber",
    numero: 1234,
    apartamento: true,
    complemento: "ap 403",
    }
];

cliente.endereços.push(
    {
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
    }
);

const listaDeApartamento = cliente.endereços.filter(
    (endereço) => endereço.apartamento === true
);

console.log(listaDeApartamento);