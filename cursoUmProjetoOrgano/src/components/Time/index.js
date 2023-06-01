import React from 'react';
import Jogador from '../Jogador';
import './Time.css';
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {
  const fundo = {backgroundColor: props.corUnica, opacity: 0.10};
  
  const mudarCor = (evento) => {
    props.mudarCor(evento.target.value, props.nome);
  }

  return (
    props.jogadores.length > 0 && (
      <section className="time" style={fundo}>
        <input 
          onChange={mudarCor} 
          value={props.corUnica} 
          type="color" 
          className="input-cor" 
        />

        <h3 style={{ borderColor: props.corUnica }}>{props.nome}</h3>

        <div className="jogadores">
          {props.jogadores.map(jogador => (
            <Jogador
              corDeFundo={props.corUnica}
              key={jogador.jogadorNome}
              jogadorNome={jogador.jogadorNome}
              altura={jogador.altura}
              peso={jogador.peso}
              universidade={jogador.universidade}
              conferencias={jogador.conferencias}
              posicao={jogador.posicao}
              divisao={jogador.divisao}
              times={jogador.times}
              imagem={jogador.imagem}
              aoDeletar={props.aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
}

export default Time;
