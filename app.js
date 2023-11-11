alert("Olá, seja bem vindo ao jogo do número secreto");
let quantidadeDeNumeros = 54;
let numeroSecreto = parseInt(Math.random() * quantidadeDeNumeros + 1);
let palpite;
let tentativas = 1;

while (palpite != numeroSecreto) {
  palpite = prompt(
    `Você consegue adivinhar qual é o número secreto de 1 a ${quantidadeDeNumeros}?`
  );
  if (palpite == numeroSecreto) {
    break;
  } else {
    if (palpite > numeroSecreto) {
      alert(`O número secreto é menor que ${palpite}`);
    } else {
      alert(`O número secreto é maior que ${palpite}`);
    }
  }
  tentativas++;
}
palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Muito bem você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);
