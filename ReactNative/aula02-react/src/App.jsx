  import "./styles.css";

  export const Card = (props) => {
    let apresentacao = "Dr(a).";

    if (props.genero === "masculino") {
      apresentacao = "Dr(o)";
    }

    if (props.genero == "nao-binario") {
      apresentacao = "Dr(e)";
    }

    return (
      <div className="container">
        <img src={props.imagemPerfil} />
        <p className="titulo">
          {apresentacao} {props.sobrenome}, {props.nome}
        </p>
      </div>
    );
  };

  export const App = () => {
    const medicos = [
      {
        nome: "Leticia",
        sobrenome: "Costana",
        genero: "feminino",
        imagemPerfil: "http://placekitten.com/400/400"
      },
      {
        nome: "Adimaldo",
        sobrenome: "Pinto",
        genero: "masculino",
        imagemPerfil: "http://placekitten.com/401/401"
      },
      {
        nome: "Noah",
        sobrenome: "Lutus",
        genero: "nao-binario",
        imagemPerfil: "http://placekitten.com/402/402"
      }
    ];
    return (
      <div>
        {medicos.map((medico) => (
          <Card {...medico} />
        ))}
      </div>
    );
  };
