//2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.
var numero = parseInt(prompt("Digite um número"));

if (numero % 2 === 0) {
    alert( numero + " é um numero par.");
    }else {
        alert(numero + " é um número impar.");
    }
