document.addEventListener('DOMContentLoaded', function() {

  function adicionarIds(filmes) {
      let id = 1;
      filmes.forEach(filme => {
        filme.id = id++;
      });
      return filmes;
    }
    
    console.log(adicionarIds(filmes));
  
})