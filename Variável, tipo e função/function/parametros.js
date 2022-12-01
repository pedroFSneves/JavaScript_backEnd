//parâmetros de função 

//console.log(soma(2, 2));
//console.log(soma(123 , 423));

//Parâmetros x Argumentos

//Ordem dos parâmetros 

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}.`;
};

function soma(num1, num2){
    return num1 + num2;
};


function multiplica(number1, number2){
    return number1 * number2;
};

console.log(multiplica(soma(4, 5), soma(3, 3)));