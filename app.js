alert('Boas vindas ao jogo do número secreto');
<<<<<<< HEAD
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10'); 

{    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
        } else {
                alert(`O número secreto é maior que ${chute}`);
        }
    }
    //tentativas = tentativas + 1;
    tentativas ++;
  }
}
=======
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10'); 

//se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`)
    }
}
>>>>>>> d07412b5749f36a237d87cdffff88e8cdb5c1572
