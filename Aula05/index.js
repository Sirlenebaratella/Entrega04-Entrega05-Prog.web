/*
Abrir o terminal Ctrl + tecla '
node index.js escrever no terminar.
ctrl C fecha a aplixação no terminarl
Ctrl L Apaga tudo
biblioteca -> Import eu vou chamar o (prompt sync) --> Colocar o "type": "module", no package.json
biblioteca -> gitgnore faz com que a pasta do modules seja ignorada
biblioteca -> chalk --> muda a cor do console.log, ou seja do que está printando. / ex prompt(chalk.blue("Qual é o seu Salário seu merda ?"))
     se colocar assim --> prompt(chalk.blue.bgRed("Qual é o seu Salário seu merda ?")) -- Bg (inverte a cor fica par fora)

npm init ou i - serve para fazer o packege.jason, colocando  -y, você está dando "sim" em todas as perguntas que ele manda no terminal para você.
já o packege-lock.jason - é utilizado somente quando você instala uma biblioteca. para instalar uma biblioteca bast no terminal digitr npm i (nome da biblioteca).
ex: npm i PromptSync

forEach é uma função (callback)

*/

// Criando um vetor - inicializando itens
const lista = ["Item1", "Item2", "Item3"];

const mt = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(lista[0]); //"0" passando a posição do array
console.log(mt[1][1]); // printando a posição 1,1, no caso o valor 5 da matriz.

//no 1° forEach ele vai exc. a função para ler as linhas da nossa matriz; no 2° ele vai exc. a função para printar as colunas da matriz.
mt.forEach(function (item) {
  item.forEach(function (valor) {
    console.log(valor);
  });
});

//lista.forEach(item => console.log(item)) -----> forma mais resumida

lista.forEach(function (item) {
  console.log(item);
});

// criando um objeto "pessoa1"
const pessoa1 = {
  nome: "Sirlene",
  idade: 20,
};

// passando/buscando o objeto pessoa1 e o atributo
console.log(pessoa1.nome);

// o filha da puta aceita incluir atributos mesmo que você não tenha colocado o tal atributo na criação do objeto. Basta somente chamar, EX -->("pessoa1.cpf = "12345"" )

pessoa1.nome = "Sirlene";
pessoa1.cpf = "12345";

console.log(pessoa1);

/*
- criando o objeto pessoa. dessa forma ele indica o tipo do objeto. 
- Ele cria um método construtor, onde ele passa os paramentros da função do objetos "pessoa" dentro do ().
- Já os itens "nome,sobrenome,idade" são os atributos da classe.
- ao usar this --> estamos ref. os atributos da classe "pessoa", se não usar o this e escrever somente exemplo -> nome = nome, você estará ref. os itens dentro do parenteses que é  função.
*/

class Pessoa {
  nome;
  sobrenome;
  idade;

  //função construtor (parametros)
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  //criando um metodo
  podeDirigir() {
    return this.idade >= 18 ? "Pode" : "Não Pode"; /* operador ternario -> tipo if/else, onde ele pergunta se o atributo idade é >=18 , 
    usando o sinal " ? " para realizar if/else */
  }
}

//Instanciando o objeto  // colocando os parametros dentro dos parenteses
const pessoa = new Pessoa("David", 21);
console.log(pessoa);

/*
Plural routes
GET    REQUISIÇÃO HTTP QUE RETORNA VALORES- 
POST   REQUISIÇÃO HTTP QUE "CADASTRA" VALORES
PUT    REQUISIÇÃO HTTP QUE ATUALIZA UM OBJETO INTEIRO
PATCH  REQUISIÇÃO HTTP QUE ATUALIZA CAMPOS DE UM OBJETO
DELETE REQUISIÇÃO HTTP QUE APAGA UM REGISTRO
*/