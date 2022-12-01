//1 Crie uma função que recebe como argumento o nome de um aluno.
//2 Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
//3 Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeAlunoENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem média de ${mediaDoAluno}`);

    } else {
        console.log(`aluno não encontrado`);
    }
};

exibeAlunoENota("Juliana");