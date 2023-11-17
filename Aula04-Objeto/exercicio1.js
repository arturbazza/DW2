// Faça a modelagem e definição de uma lista dos seus filmes favoritos.
// Cada filme deve conter pelo menos 3 propriedades e pelo menos um deles deve ser um array de string.
// Além disso, deve possuir uma propriedade que seja do tipo array de objetos.

const filmes = [
  {
    titulo: 'O Alto da Compadecida',
    genero: 'Comédia',
    lancamento: 2000,
    disponivel: {
      alugar: false,
      comprar: true,
      gratuito: false,
    },
  },
  {
    titulo: 'Duro de Matar',
    genero: 'Ação',
    lancamento: 1998,
    disponivel: {
      alugar: true,
      comprar: true,
      gratuito: true,
    },
  },
  {
    titulo: 'O menino que descobriu o vento',
    genero: 'Drama',
    lancamento: 2019,
    disponivel: {
      alugar: true,
      comprar: false,
      gratuito: false,
    },
  },
];
console.log(filmes);
