### Exercício: Listagem Família Resident Evil

[Resolução](https://stackblitz-starters-xjp757.stackblitz.io)

Considere o component `Personagens` declarado abaixo. Faça uma alteração na renderização do JSX para que sejam exibidos apenas personagens da família (por exemplo, `Redfield`) parametrizada através do uso das props do React. 

```jsx

const Personagens = () => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagens.map(personagem => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  )
}
```

Procure na documentação sobre [métodos de strings disponíveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String) para descobrir qual método pode te ajudar nessa tarefa.
