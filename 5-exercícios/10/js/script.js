// 10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.

let n1 = parseInt(prompt("Digite um número"))

var nimpar = 0

while (nimpar < n1){
    nimpar++;
    console.log(`${nimpar} é ímpar`)
    nimpar++;
}if (n1 & 1){
    console.log(`O número escolhido (${n1}) é ímpar`)
}else {
    console.log(`O número escolhido (${n1}) é par`)
}

