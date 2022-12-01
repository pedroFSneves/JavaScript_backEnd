//primeira

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => acc + atual, 0);

//segunda

//const soma = numeros.reduce(function (acc, atual) {
    //return atual + acc
//}, 0)

//Terceira

//function operacaoNumerica(acc, atual) {
    //return atual + acc
//}
   
//const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma) //170