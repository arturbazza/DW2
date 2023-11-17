const filmes = [
  {
    titulo: 'O Alto da Compadecida',
    img: 'https://media.fstatic.com/ALGSj5XrOeLsxOy1P2q4dbGPHF0=/322x478/smart/filters:format(webp)/media/movies/covers/2019/12/2019-700-o-auto-da-compadecida-tv-globo-poster.jpg',
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
    img: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/25/88/20188922.jpg',
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
    img: 'https://m.media-amazon.com/images/I/710j0HLuwuL._SY425_.jpg',
    genero: 'Drama',
    lancamento: 2019,
    disponivel: {
      alugar: true,
      comprar: false,
      gratuito: false,
    },
  },
];
document.addEventListener('DOMContentLoaded', function() {

let anoReferencia = new Date().getFullYear();

const htmlList = document.querySelector('#filmes');

for (let filme of filmes) {
  let auxAlugar = filme.disponivel.alugar ? 'Sim' : 'Não';
  let auxComprar = filme.disponivel.comprar ? 'Sim' : 'Não';
  let auxGratuito = filme.disponivel.gratuito ? 'Sim' : 'Não';
  
  const p = document.createElement('p');  
  const img = document.createElement('img');
  img.src = filme.img;
  
  htmlList.appendChild(img);
  
  const idadeDoFilme = anoReferencia - filme.lancamento;
  p.innerHTML = "<b>Filme:</b> " + filme.titulo + "<br>"
               + "<b>Gênero:</b> " + filme.genero + "<br>"
               + "<b>Lançamento:</b> " + filme.lancamento + "<br>"
               + "<b>Alugar:</b> " + auxAlugar + "<br>"
               + "<b>Comprar:</b> " + auxComprar + "<br>"
               + "<b>Gratuíto:</b> " + auxGratuito + "<br>"
               + "<b>Idade do filme:</b> " + idadeDoFilme + " anos";
  htmlList.appendChild(p);
}
})