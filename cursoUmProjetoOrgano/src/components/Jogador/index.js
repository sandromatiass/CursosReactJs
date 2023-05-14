import { AiFillCloseCircle } from 'react-icons/ai';
import './Jogador.css'

//outra maneira de importar

const Jogador = ({ imagem, altura , peso, divisao, conferencias , universidade, posicao, jogadorNome , times , corDeFundo, aoDeletar}) => {
    return (
      <div className="jogador">
        <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
          <img src={imagem} alt="teste" />
        </div>
        <div className="rodape">
          <h4>{jogadorNome.toUpperCase()}</h4>
          <p style={{ color: corDeFundo }}>{times.toUpperCase()}</p>

          <div className='caracteristica'>
            <p>
              <span style={{ color: corDeFundo }}>Altura:</span>
              {altura}
            </p>
            <p>
              <span style={{ color: corDeFundo }}>Peso:</span>
              {peso}
            </p>
            <p>
              <span style={{ color: corDeFundo }}>Divisão: </span>
              {divisao}
            </p>
            <p>
              <span style={{ color: corDeFundo }}>Conferêcia: </span>
              {conferencias}
            </p>
            <p>
              <span style={{ color: corDeFundo }}>Universidade: </span>
              {universidade}
            </p>
            <p>
              <span style={{ color: corDeFundo }}>Posição: </span>
              {posicao}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Jogador