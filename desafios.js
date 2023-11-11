/*
//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";

//Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//Exiba um alerta com o texto "Erro! Preencha todos os campos."
alert("Erro! Preencha todos os campos.");

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos." Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos.";
alert(mensagemDeErro);

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
nome = prompt("Qual é o seu nome?");

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
idade = prompt("Qual é a sua idade?");

//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >= 18) {
  alert("Você já pode tirar a habilitação de motorista!");
}

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Qual é o dia da semana?");
if (diaDaSemana == "Domingo") {
  alert("Bom fim de semana!");
}
if (diaDaSemana == "Sábado") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt(
  "Digite um número qualquer (pode ser positivo ou negativo)"
);
if (numero < 0) {
  alert(`${numero} é negotivo`);
} else {
  alert(`${numero} é positivo`);
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Quanto é pontuação?");
if (pontuacao >= 100) {
  alert("Parabéns! você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}
//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoDoUsuario = prompt("Quanto é o saldo?");
alert(`O saldo do usuario é ${saldoDoUsuario}`);
//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeDoUsuario = prompt("Qual é o seu nome?");
alert(`Seja muito bem vendo ${nomeDoUsuario}`);


//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let n1 = 1;
while (n1 <= 10) {
  alert(n1);
  n1++;
}
//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let n2 = 10;
while (n2 >= 0) {
  alert(n2);
  n2--;
}
//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let n3 = prompt("Digite um número:");
while (n3 > 0) {
  console.log(n3);
  n3--;
}
//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let n4 = prompt("Digite um número:");
let n0 = 0;
while (n0 <= n4) {
  console.log(n0);
  n0++;
}
*/

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Seja bem vindo");

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = prompt("Qual é p seu nome?");
console.log(`Olá, ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt("Qual é a sua linguagem de programação favorita?");
console.log(`A sua linguagem de programação favotira é ${linguagem}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = prompt("Digite um valor");
let valor2 = prompt("Digite um valor");
let resultadoSoma = parseInt(valor1) + parseInt(valor2);
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let resultadoSubtracao = parseInt(valor1) - parseInt(valor2);
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSubtracao}`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idadeDoUsuario = prompt("Qual é a sua idade?");
if (idadeDoUsuario < 18) {
  console.log(`Você tem menos de 18 anos, ainda é menor de idade.`);
} else {
  console.log(`Você é maior de idade.`);
}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite qualquer número:");
if (numero < 0) {
  console.log(`O número ${numero} é negativo`);
}
if (numero == 0) {
  console.log(`O número ${numero} é igual a 0`);
} else {
  console.log(`O número ${numero} é posito`);
}

//Use um loop while para imprimir os números de 1 a 10 no console.
let n0 = 0;
while (n0 <= 10) {
  console.log(n0);
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = prompt("Qual é a sua nota?");
if (nota >= 7) {
  ("Aprovado");
} else {
  ("Reprovado");
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio2);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio3 = parseInt(Math.random() * 100 + 1);
console.log(numeroAleatorio3);
