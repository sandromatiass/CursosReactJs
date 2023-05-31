import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { listaConferencias, listaDivisao, listaPosicao} from "../ListaSuspensa/Lista"
import useListaTimes from '../ListaSuspensa/todosOsTimes';
import "./Formulario.css";

const Formulario = (props) => {
  
  const [jogadorNome, setJogadorNome] = useState('')
  const [altura, setAltura] = useState('')
  const [peso ,setPeso] = useState('')
  const [universidade, setUniversidade] = useState('')
  const [imagem, setImagem] = useState('')
  const [conferencias, setConferencias] = useState('')
  const [posicao, setPosicao] = useState('');
  const [divisao, setDivisao] = useState('')
  const [times, setTimes] = useState('')
  const [listaTimes, setListaTimes] = useListaTimes([])
  
  
 

  const aoSalvar = (evento) => {
      evento.preventDefault()
      props.aoJogadorCadastrado({
        jogadorNome,
        altura,
        peso,
        universidade,
        imagem,
        conferencias,
        posicao,
        divisao,
        times,
        listaTimes
      })

      setJogadorNome('')
      setAltura('')
      setImagem('')
      setPeso('')
      setDivisao('')
      setConferencias('')
      setPosicao('')
      setUniversidade('')
      setTimes('')
      setListaTimes('')
    
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Jogador"
          placeholder="Digite o nome do jogador"
          valor={jogadorNome}
          aoAlterado={(valor) => setJogadorNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Altura"
          placeholder="Digite a altura"
          valor={altura}
          aoAlterado={(valor) => setAltura(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Peso"
          placeholder="Digite o peso"
          valor={peso}
          aoAlterado={(valor) => setPeso(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Universidade"
          placeholder="Digite sua universidade"
          valor={universidade}
          aoAlterado={(valor) => setUniversidade(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Anexar imagem do jogador"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Conferência"
          itens={listaConferencias}
          valor={conferencias}
          aoAlterado={(valor) => setConferencias(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Posição"
          itens={listaPosicao}
          valor={posicao}
          aoAlterado={(valor) => setPosicao(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Divisão"
          itens={listaDivisao}
          valor={divisao}
          aoAlterado={(valor) => setDivisao(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          itens={listaTimes.map(nomeTimes => nomeTimes.nome)}
          valor={times}
          aoAlterado={(valor) => setTimes(valor)}
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
