/*Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
Por fim, o programa mostra a média aritmética da turma.*/
var readlineSync = require('readline-sync')
var numeroAlunos = readlineSync.question('Numero de alunos: ')
var notaAluno = 1
var soma = 0
while (notaAluno <= numeroAlunos){
    soma += readlineSync.questionInt('Informe a nota do aluno' + notaAluno + ': ')
    notaAluno++
}

var media = soma / numeroAlunos
console.log('A média da turma é ' + media + '.')
