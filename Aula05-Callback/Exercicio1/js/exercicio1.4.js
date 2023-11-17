document.addEventListener('DOMContentLoaded', function() {

  function filmesAcaoEFiccaoCientifica(filmes) {
      const filmesAcaoEFiccaoCientifica = [];
      filmes.forEach(filme => {
        if (filme.generos.includes("Ação") && filme.generos.includes("Ficção Científica")) {
          filmesAcaoEFiccaoCientifica.push(filme);
        }
      });
      return filmesAcaoEFiccaoCientifica;
    }
    
    console.log(filmesAcaoEFiccaoCientifica(filmes));
  
})