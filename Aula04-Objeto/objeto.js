const pessoa = {
  nome: 'Artur Bazzanella',
  anoNascimento: 1975,
  vegetariano: false,
  ceps: ['90040341', '90040193', '91530034'],
  pets: [
    {
      nome: 'Pérola',
      tipo: 'cachorro',
      vacinado: true,
    },
    {
      nome: 'Guto',
      tipo: 'cachorro',
      vacinado: false,
    },
  ],
  endereco: {
    cidade: 'Porto Alegre',
    bairro: 'Santana',
    numero: 115,
    complemento: 'ap 201',
    endereco: 'Av. Jerônimo de Ornelas',
  },
};

console.log(pessoa.endereco.numero);

console.log(pessoa.pets);

//loop
// tipo 1
// const pets = pessoa.pets;

//tipo 2 - igual ao de cima
const { pets } = pessoa;

for (let pet of pets) {
  //const { vacinado } = pet;
  // const vacinado = pet.vacinado;
  if (pet.vacinado === false) {
    const { nome } = pet;
    console.log(nome);
  }
}
