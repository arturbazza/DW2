document.addEventListener('DOMContentLoaded', function() {

    function tarefasConcluidas(tarefas) {
        return tarefas.filter(tarefa => tarefa.concluida);
    }
    
    const tarefasConcluidasArray = tarefasConcluidas(tarefas);
    console.log(tarefasConcluidasArray);

})
  