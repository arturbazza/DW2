document.addEventListener('DOMContentLoaded', function() {

  function filmesFantasia(filmes) {
      const filmesFantasia = [];
      filmes.forEach(filme => {
        if (filme.generos.includes("Fantasia")) {
          filmesFantasia.push(filme);
        }
      });
      return filmesFantasia;
    }
    
    console.log(filmesFantasia(filmes));
  
})