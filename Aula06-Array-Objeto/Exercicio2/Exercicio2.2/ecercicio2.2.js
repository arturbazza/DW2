const paises = [
  {
    pais: 'br',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [
          {
            nome: 'felipe',
            esporte: 'volei',
          },
        ],
      },
      {
        tipo: 'prata',
        ganhadores: [
          {
            nome: 'mathias',
            esporte: 'atletismo',
          },
        ],
      },
      {
        tipo: 'bronze',
        ganhadores: [
          {
            nome: 'michael',
            esporte: 'futebol',
          },
        ],
      },
    ],
  },
  {
    pais: 'eua',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [
          {
            nome: 'felipe',
            esporte: 'basquete',
          },
        ],
      },
      {
        tipo: 'prata',
        ganhadores: [],
      },
      {
        tipo: 'bronze',
        ganhadores: [],
      },
    ],
  },
  {
    pais: 'nova zelandia',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [],
      },
      {
        tipo: 'prata',
        ganhadores: [],
      },
      {
        tipo: 'bronze',
        ganhadores: [],
      },
    ],
  },
];

document.addEventListener('DOMContentLoaded', function() {

const paisesComMedalhasQuantidade = paises.map(pais => {
  const medalhasComQuantidade = pais.medalhas.map(medalha => ({
    ...medalha,
    quantidade: medalha.ganhadores.length,
  }));

  return {
    ...pais,
    medalhas: medalhasComQuantidade,
  };
});

console.log(paisesComMedalhasQuantidade);

})
