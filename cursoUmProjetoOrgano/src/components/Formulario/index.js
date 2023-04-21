import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  
  const conferencias = ["Conferêcia Leste", "Conferêcia Oeste"];

  const divisao = [
    "Divisão Atlântico",
    "Divisão Central",
    "Divisão Sudeste",
    "Divisão Noroeste",
    "Divisão Pacífico",
    "Divisão Sudoeste"
  ];
    
  const times = [
    "Boston Celtics",
    "Brooklyn Nets",
    "New York Knicks",
    "Philadelphia 76ers",
    "Toronto Raptors",
    "Chicago Bulls",
    "Cleveland Cavaliers",
    "Detroit Pistons",
    "Indiana Pacers",
    "Milwaukee Bucks",
    "Atlanta Hawks",
    "Charlotte Hornets",
    "Miami Heat",
    "Orlando Magic",
    "Washington Wizards",
    "Denver Nuggets",
    "Minnesota Timberwolves",
    "Portland Trail Blazers",
    "Oklahoma City Thunder",
    "Utah Jazz",
    "Golden State Warriors",
    "Los Angeles Clippers",
    "Los Angeles Lakers",
    "Phoenix Suns",
    "Sacramento Kings",
    "Dallas Mavericks",
    "Houston Rockets",
    "Memphis Grizzlies",
    "New Orleans Pelicans",
    "San Antonio Spurs",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do seu personagem de anime</h2>
        <CampoTexto label="Jogador" placeholder="Digite o nome do jogador" />
        <CampoTexto label="Posição" placeholder="Digite a posição" />
        <CampoTexto label="Imagem" placeholder="Anexar imagem do jogador" />
        <ListaSuspensa label="Conferência" itens={conferencias} />
        <ListaSuspensa label="Divisão" itens={divisao} />
        <ListaSuspensa label="Time" itens={times} />
        <Botao> 
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
