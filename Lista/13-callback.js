const nomes = ["evaldo", "luiz", "maria" ];

//nomes.forEach(function(nome){
    //console.log(nome)
//});

//AeroFunction

//nomes.forEach((nome) => {
    //console.log(nome)
//});

//Function fora do ForEach

function imprimeNome(nome){
    console.log(nome);
};

nomes.forEach(imprimeNome);