document.addEventListener('DOMContentLoaded', function() {

    function tarefasConcluidasAbaixoDe30Dias(tarefas) {
        return tarefas.some(tarefa => tarefa.concluida && tarefa.dias < 30);
    }
    
    const existeTarefasAbaixoDe30Dias = tarefasConcluidasAbaixoDe30Dias(tarefas);
    console.log(existeTarefasAbaixoDe30Dias);
  
})
  