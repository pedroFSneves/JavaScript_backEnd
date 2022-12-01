const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 6.9, 8, 7.5];

const reprovados = alunos.filter((_, i) =>{
    return medias[i] < 7;
});

console.log(`reprovado/s: ${reprovados}.`);