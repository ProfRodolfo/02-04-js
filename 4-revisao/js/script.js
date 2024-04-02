// console.log("Olá mundo!")
// console.log('Olá mundo 2')
// console.log(`Olá mundo 3`)

// let nome = 'Rodolfo'
// const idade = 38 
// var profissao = 'programador'

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(profissao)

// console.log(nome + idade + profissao)
// console.log("Usuário: " + nome +  " Idade:" + idade + " Profissão: " + profissao)

// console.log(`${nome} ${idade} ${profissao}`)
// console.log(`Usuario: ${nome} Idade: ${idade} Profissão: ${profissao}`)


// var idade = parseInt(prompt("Digite sua idade"))

// alert("Você tem " + idade + " anos")

// var idade2 = idade + 10 

// alert("Daqui a 10 anos você terá " + idade2 + " anos")


// let  nome = prompt("Digite seu nome")
// let sobrenome = prompt("Sobrenome")

// alert(`O nome completo é: ${nome} ${sobrenome}`)


// let idade = parseInt(prompt("Idade"))

// if(idade >= 18) {
//     alert('Pode entrar')
// }else{
//     alert('Não pode entrar')
// }

// let idade = parseInt(prompt("Idade"))

// if(idade >= 18) {
//     alert('Pode entrar')
// }else if (idade >=15 && idade<18){
//     alert('Pode entar com os pais')
// }else{
//     alert('Não pode entrar')
// }

// for (let i = 0; i <= 50; i++) {
//     console.log(`O valor de i é: ${i}`)
// }

// let p = 0;

// while (p < 5){
//     console.log(`Repetindo ${p}`)
//     p++
// }

// let g  = 10

// do{
//     console.log(`Valor de G: ${g}`)
//     g = g -1
// }while(g > 1)

const trabalho = prompt("Digite seu trabalho")

switch (trabalho) {
    case "programador":
        console.log("Você gosta de programar!");
        break;
    case "engenheiro":
        console.log("Você gosta de cálculo");
        break;
    case "Advogado":
        console.log("Você gosta Justiça");
        break;
    default:
        console.log("Profissão não encontradoa");
}