function apresentar(nome){
    return `meu nome é ${nome}`;
};

//Arrow function

const apresentarArrow = nome => `meu nome ${nome}.`
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (number1, number2) =>{
    if(number1 > 10 || number2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return number1 + number2;
    };
};

//hoisting: arrow function se comporta como expressão