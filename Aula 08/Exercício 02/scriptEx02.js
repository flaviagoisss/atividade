// Três constantes para três pertinentes alunos com as suas devidas informações(nome, nota e turma).
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    }
];

/* Função para os alunos que foram aprovados, com os seguintes parâmetros:
>>Alunos e Media
e foi colocado uma estrutura de repetição "for" junto com um laço de condição "if".
*/

function alunosAprovados (alunos, media) {
    let aprovados = [];
    for (let i = 0; i < alunos.length; i++) {
        let {nota,nome} = alunos[i];
        if (nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados; // Retorno de resultados dos aprovados.
}
/* Mostra no console o que foi feito e a função do código,
no caso mostrar os alunos aprovados */
console.log(alunosAprovados(alunos,5));