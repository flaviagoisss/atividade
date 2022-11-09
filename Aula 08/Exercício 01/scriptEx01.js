// Função para calcular a idade e retornar quantos anos a pessoa vai ter em N anos.
function calculadoraIdade(anos){
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade.`;
    // this --> vai referenciar à uma costante/variável.
};
// Constante para guardar informações de um primeiro usuário, com nome e idade.
const pessoa1 = {
    nome: 'Amelia',
    idade: 23,
};
// Constante para guardar informações de um segundo usuário, com nome e idade.
const pessoa2 = {
    nome: 'Márcia',
    idade: 20,
};
// Constante para guardar informações de um terceiro usuário, com nome e idade.
const pessoa3 = {
    nome: 'Jonas',
    idade: 13,
};
// Imprime os dados/código rodar no console.
console.log(calculadoraIdade.call(pessoa1,40)); // Call vai ligar os dados dos constantes com a função.
console.log(calculadoraIdade.apply(pessoa2,[23])); // Apply mesma função do Call.