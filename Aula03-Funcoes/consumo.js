/*Exercício 1: Calculadora para Consumo de Álcool**

**Descrição:** Desenvolva uma função em JavaScript que recebe três argumentos: `anoNascimento`, `paisReferencia`, `anoReferencia`. A função deve retornar uma `boolean` que indica se a pessoa pode ou não consumir bebida alcoólica com base no país de referência. O argumento `anoReferencia` deve assumir um valor padrão que é equivalente ao ano atual que o sistema está rodando. Para o Brasil (`BR`) é permitido para maiores de 18 anos, para o Japão (`JP`) para maiores de 19 anos e para os Estados Unidos (`EUA`) para maiores de 21 anos. 

Use os exemplos abaixo como referência para seus testes.

podeBeberAlcool(1995, 'BR', 2023) //true
podeBeberAlcool(1995, 'BR') //true
podeBeberAlcool(2005, 'BR') // true
podeBeberAlcool(2005, 'JP') // false
podeBeberAlcool(2005, 'EUA') // false   
*/

function podeConsumirAlcool(
  anoNascimento,
  paisReferencia,
  anoReferencia = new Date().getFullYear()
) {
  let idadePermitida;

  switch (paisReferencia) {
    case 'BR':
      idadePermitida = 18;
      break;
    case 'JP':
      idadePermitida = 19;
      break;
    case 'EUA':
      idadePermitida = 21;
      break;
    default:
      return false;
  }

  const idade = anoReferencia - anoNascimento;
  return idade >= idadePermitida;
}

console.log(podeConsumirAlcool(2000, 'BR')); // 18 - true
console.log(podeConsumirAlcool(2005, 'JP', 2023)); // 19 - false
console.log(podeConsumirAlcool(1999, 'EUA', 2023)); // 21 true
