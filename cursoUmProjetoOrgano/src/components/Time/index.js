import React from 'react';
import Jogador from '../Jogador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ nome, corUnica, jogadores, aoDeletar, mudarCor }) => {
  const mudarCorHandler = (evento) => {
    mudarCor(evento.target.value, nome);
  };

  return (
    jogadores.length > 0 && (
      <section className="time" style={{ backgroundColor: hexToRgba(corUnica, '0.03') }}>
        <input
          onChange={mudarCorHandler}
          value={corUnica}
          type="color"
          className="input-cor"
        />

        <h3 style={{ borderColor: corUnica }}>{nome}</h3>

        <div className="jogadores">
          {jogadores.map((jogador) => (
            <Jogador
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
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
