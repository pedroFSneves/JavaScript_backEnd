//const

const shape = "triangulo";
const lenght = 12;
const height = 5;
let area;

if (shape === "quadrado"){
    area = height * lenght;
}else{  
    area = height * lenght /2;
};

console.log(area);