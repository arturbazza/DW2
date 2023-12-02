import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Filme = ({ nome, ano }) => {
  return (
    <span>
      <br />Filme: <b>{nome}</b>
      <br />Ano: <b>{ano}</b>
    </span>
  );
};

const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    oscar: true,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    oscar: true,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    oscar: true,
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
  {
    nome: 'Meninas Malvadas',
    oscar: false,
    lancamento: 2004,
    diretores: ['Mark Waters'],
    generos: ['Comédia'],
  }
];

function App() {
  const [oscar, setOscar] = useState(true);

  const filmesFiltrados = filmes.filter(filme => filme.oscar === oscar);

  const gerarEstiloBotao = (botao) => {
    if (botao === 'ganhador') {
      return {
        color: oscar ? 'blue' : 'green',
      }
    }
    if (botao === 'perdedor') {
      return {
        color: oscar ? 'green' : 'blue',
      }
    }
  }

  const handOnClickGanhador = () => {
    setOscar(true);
  }

  const handOnClickPerdedor = () => {
    setOscar(false);
  }

  return (
    <>
      <h1>Oscar</h1>
      <div>
        <button onClick={handOnClickGanhador} style={gerarEstiloBotao('ganhador')}>Ganhadores</button>
        <button onClick={handOnClickPerdedor} style={gerarEstiloBotao('perdedor')}>Perdedores</button>
      </div>
      {
        filmesFiltrados.map(filme => <Filme key={filme.nome} nome={filme.nome} ano={filme.lancamento} />)
      }
    </>
  )
}
export default App;
