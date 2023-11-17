/*Faça uma função que irá receber três parâmetros. O primeiro será um numero que representa o valor de uma compra que está sendo feita no mercado / farmácia. O segundo parâmetro é um `boolean` que representa se a compra possui ou não convênio com o estabelecimento e o último parâmetro representa se a compra está sendo feita ou não com o cartão da loja. Se a pessoa que estiver fazendo a compra possuir o cartão da loja e possui convênio então o desconto será de 15%. Se o usuário possuir convenio ou estiver fazendo a compra pelo cartão da loja o desconto é de 10%. Caso o usuário não tenha nenhum desses benefícios não existe desconto para a compra. Além disso, aplique um valor de desconto de no máximo 100 reais.
 */

function caslculadoraDesconto(
  valorCompra,
  possuiConvenio, //10%
  cartaoLoja //15%
) {
  if (possuiConvenio && cartaoLoja) {
    let desconto = valorCompra * 0.15; //15%
    if (desconto > 100) {
      desconto = 100;
    }
    precoComDesconto = valorCompra - desconto;
    return precoComDesconto + ' -> 15%';
  } else if (possuiConvenio || cartaoLoja) {
    let desconto = valorCompra * 0.1; //10%
    if (desconto > 100) {
      desconto = 100;
    }
    precoComDesconto = valorCompra - desconto;
    return precoComDesconto + ' -> 10%';
  } else {
    return valorCompra + ' -> Não tem desconto!';
  }
}
console.log(caslculadoraDesconto(2000, true, true)); //15%
console.log(caslculadoraDesconto(1000, false, true)); //10%
console.log(caslculadoraDesconto(1000, false, false)); // s desc.
