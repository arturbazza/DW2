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

const paisesComMedalhas = paises.filter(pais => {
    return pais.medalhas.some(medalha => medalha.ganhadores.length > 0);
  });
  
  console.log(paisesComMedalhas);
  
})