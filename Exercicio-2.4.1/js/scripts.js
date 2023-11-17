const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costana',
    genero: 'feminino',
    imagemPerfil: 'http://placekitten.com/400/400'
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
    imagemPerfil: 'http://placekitten.com/401/401'
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
    imagemPerfil: 'http://placekitten.com/402/402'
  },
];

document.addEventListener('DOMContentLoaded', function() {

const htmlList = document.querySelector('#medicos');

  for (let medico of medicos) {
    let tratamento;
    if (medico.genero === 'masculino') {
      tratamento = 'Dr.';
    } else if (medico.genero === 'feminino') {
      tratamento = 'Dra.';
    } else if (medico.genero === 'nao-binario') {
      tratamento = 'Dr(e).';
    }
    const p = document.createElement('p');
    
    const img = document.createElement('img');
    img.src = medico.imagemPerfil;
    
    htmlList.appendChild(img);
    
    p.innerHTML = "<b>Profissional: </b>" + tratamento + " " + medico.nome + " "
      + medico.sobrenome + "<br><b>Gênero: </b>" + medico.genero + ".";
    
    htmlList.appendChild(p);

  }
})