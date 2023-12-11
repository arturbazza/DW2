import React, { useState } from 'react';
import './App.css';

const tarefas = [
  {
    titulo: 'Buscar filho na escola',
    concluida: true,
    dias: 1,
  },
  {
    titulo: 'Comprar pirulitu para o professor',
    concluida: false,
    dias: 1,
  },
  {
    titulo: 'Comprar um saco de pirurilu',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Pagar a luz',
    concluida: true,
    dias: 5,
  },
  {
    titulo: 'Estudar',
    concluida: true,
    dias: 10,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  }
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
      };
      setTarefasList(ordenarTarefas([...tarefasList, novaTarefaObj]));
      setNovaTarefa('');
      setDiasTarefa('');
    }
  };

  return (
    <div className="App">
      <h1>Gerenciador de Tarefas</h1>
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
