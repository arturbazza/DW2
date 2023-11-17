document.addEventListener('DOMContentLoaded', function() {

  function obterTitulosEAnos(filmes) {
      const resultado = [];
      filmes.forEach(filme => {
        resultado.push({ titulo: filme.nome, anoLancamento: filme.lancamento });
      });
      return resultado;
    }
    
    console.log(obterTitulosEAnos(filmes));

})