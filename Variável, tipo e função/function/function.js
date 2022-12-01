//let x;
//console.log(x);
//x = "oi";

//DECLARAÇÃO DE FUNÇÃO

// 1) declara a função

function makeText(text){
    console.log(text)
};

// 2) executa a função (1 ou + vezes)

makeText(soma());
makeText("Botafogo");

function soma(){
    return 2 + 2;
};

console.log(soma());