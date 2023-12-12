import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const tarefas = [
  {
    titulo: 'Buscar sobrinho na escola',
    concluida: true,
    dias: 1,
    dataCriacao: '10/12/2023',
  },
  {
    titulo: 'Tarefa de DW2',
    concluida: true,
    dias: 7,
    dataCriacao: '07/12/2023',
  },
  {
    titulo: 'Correr',
    concluida: true,
    dias: 1,
    dataCriacao: '09/12/2023',
  },
  {
    titulo: 'Comprar pirulitu para o professor',
    concluida: false,
    dias: 1,
    dataCriacao: '15/12/2023',
  },
  {
    titulo: 'Comprar um saco de pirulitu',
    concluida: false,
    dias: 1,
    dataCriacao: '15/12/2023',
  },
];

const ordenarTarefas = (tarefas) => {
  const tarefasNaoConcluidas = tarefas.filter(tarefa => !tarefa.concluida);
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida);

  const tarefasOrdenadas = [
    ...tarefasNaoConcluidas.sort((a, b) => a.dias - b.dias),
    ...tarefasConcluidas
  ];

  return tarefasOrdenadas;
};

const formatarData = () => {
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataAtual.getFullYear();
  const hora = String(dataAtual.getHours()).padStart(2, '0');
  const minutos = String(dataAtual.getMinutes()).padStart(2, '0');

  return `${dia}/${mes}/${ano} - ${hora}:${minutos}`;
};

const App = () => {
  const [tarefasList, setTarefasList] = useState(ordenarTarefas(tarefas));
  const [novaTarefa, setNovaTarefa] = useState('');
  const [diasTarefa, setDiasTarefa] = useState('');

  const handleConcluirTarefa = (index) => {
    const novasTarefas = [...tarefasList];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefasList(ordenarTarefas(novasTarefas));
  };

  const handleExcluirTarefa = (index) => {
    const novasTarefas = [...tarefasList];
    novasTarefas.splice(index, 1);
    setTarefasList(novasTarefas);
  };

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (novaTarefa.trim() !== '' && diasTarefa.trim() !== '') {
      const novaTarefaObj = {
        titulo: novaTarefa,
        concluida: false,
        dias: parseInt(diasTarefa),
        dataCriacao: formatarData(),
      };
      setTarefasList(ordenarTarefas([...tarefasList, novaTarefaObj]));
      setNovaTarefa('');
      setDiasTarefa('');
    }
  };

  return (
    <div className="App">
      <h1>Gerenciador de Tarefas</h1>
      <p className="data-atual">Data e hora atual: {formatarData()}</p>
      <form onSubmit={adicionarTarefa} className="form">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicionar nova tarefa"
          className="input-text"
        />
        <input
          type="number"
          value={diasTarefa}
          onChange={(e) => setDiasTarefa(e.target.value)}
          placeholder="Dias"
          className="input-number"
        />
        <button type="submit" className="concluir" title="Adicionar"></button>
      </form>
      <ul className="lista-tarefas">
        {tarefasList.map((tarefa, index) => (
          <li key={index} className={tarefa.concluida ? 'concluida' : ''}>
            <div className="task-info">
              <span className="data-criacao">{tarefa.dataCriacao}</span>
              <span>{tarefa.titulo}</span>
              <span>{tarefa.dias} dias</span>
            </div>
            <div className="task-buttons">
              <button
                className="concluir"
                onClick={() => handleConcluirTarefa(index)}
                title={tarefa.concluida ? 'Desfazer' : 'Concluir'}
              ></button>
              <button
                className="delete"
                onClick={() => handleExcluirTarefa(index)}
                title="Excluir"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
