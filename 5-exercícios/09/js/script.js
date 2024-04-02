//9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.


let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o segundo número:'));

let operacao = prompt('Digite a operação matemática: ');

switch(operacao){
    case "+":
        console.log(`O resultado será: ${n1 + n2}`);
        break;
    
    case "-":
        console.log(`O resultado será: ${n1 - n2}`);
        break;
    
    case "*":
        console.log(`O resultado será: ${n1 * n2}`);
        break;
    
    case "/":
        console.log(`O resultado será: ${n1 / n2}`);
        break;
    
    default:
        console.log('Apenas: "+" | "-" | "*" | "/" ');
}

