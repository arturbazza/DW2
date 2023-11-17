const arquivos = [
    {
      id: 1,
      nome: 'Meu Trabalho v1',
      excluido: false,
    },
    {
      id: 2,
      nome: 'Meu Trabalho v2',
      excluido: false,
    },
    {
      id: 3,
      nome: 'Meu Trabalho v3',
      excluido: false,
    },
    {
      id: 4,
      nome: 'Meu Trabalho v4',
      excluido: true,
    }
  ];
  document.addEventListener('DOMContentLoaded', function() {

  function inverterExcluido(arquivos) {
    return arquivos.map(arquivo => ({
      ...arquivo,
      excluido: !arquivo.excluido
    }));
  }
  
  const arquivosInvertidos = inverterExcluido(arquivos);
  
  console.log(arquivosInvertidos);
})