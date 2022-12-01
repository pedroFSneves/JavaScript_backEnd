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

 for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== 'functions'){
        console.log(`a chave ${chave} tem o valor de ${cliente[chave]}`);
    };
};
