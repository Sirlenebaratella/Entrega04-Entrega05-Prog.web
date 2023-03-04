/*
Abrir o terminal Ctrl + tecla '
node index.js escrever no terminar.
ctrl C fecha a aplixação no terminarl
Ctrl L Apaga tudo
*/


//Import eu vou chamar o (prompt sync) --> Colocar o "type": "module", no package.json
import PromptSync from "prompt-sync";

//Pedir dados para o usuário
const prompt = PromptSync();

//Guarandando a resposta na var.
console.log(" Qual seu nome meu chapa ?")
const nome = prompt("");

//Printando
console.log(`olá ${nome}!`);

// Como é número precisando colocar o Number para converter. somente quando vai receber do user.
const temp = Number(prompt("Digite a temperatura:"));

if (temp > 38) {
  console.log(" Febre meu filho ! ");
} else if (temp < 26) {
  console.log(" Encontrou Jesus ! ");
}else{
    console.log(" Vai sobreviver inferno !!!")
}




const salarioAtual = Number(prompt("Qual é o seu Salário seu merda ?"))
const percentualReajuste = Number(prompt("Digite a % de reajuste :"))

// Calculando o novo salário
let novoSalario = salarioAtual * (1 + percentualReajuste / 100);

// Printando na tela o resultado
console.log(`seu salário é ${novoSalario}`)

const anoNasc = Number(prompt("Digite o Ano de Nascimento :"))
//const anoAtual = Number(prompt("Digite o Ano Atual:"))


//Aqui o usuário não vai precisar preencher o ano atual.
const anoAtual = new Date()

// o metodo getFullYear faz que vc pega somente data, pq se você não usar ele , irá puxar hora e etc.
let resultado = (anoAtual.getFullYear() - anoNasc)
console.log(`Sua idade é: ${resultado}`)

if(resultado < 18){
  console.log("Você pode pilotar filho da mãe!!")
}else{
  console.log("Tú não pode pilotar casete !!, nem vem !")
}

