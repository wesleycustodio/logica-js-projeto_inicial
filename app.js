alert('Boas vindas ao jogo do número secreto');
let nummeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * nummeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual o numero secreto, 
while (chute != numeroSecreto) {
   //Para não continua 
    chute = prompt(`Escolha um número entre 1 e ${nummeroMaximo}`); 

{    if (chute == numeroSecreto) {
         break;
        
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
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }
