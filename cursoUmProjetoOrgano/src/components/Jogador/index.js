import './Jogador.css'
import { AiFillCloseCircle } from 'react-icons/ai'

//outra maneira de importar

const Jogador = ({ imagem, altura , peso, divisao, conferencias , universidade, posicao, jogadorNome , times , corUnica, aoDeletar}) => {
    return (
      <div className="jogador">
        <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar}/>
    
        <div style={{ backgroundColor: corUnica }}>
          <img src={imagem} alt="teste" />
        </div>
        <div className="rodape">
          <h4>{jogadorNome.toUpperCase()}</h4>
          <p style={{ corUnica }}>{times.toUpperCase()}</p>

          <div className='caracteristica'>
            <p>
              <span style={{ corUnica }}>Altura:</span>
              {altura}
            </p>
            <p>
              <span style={{ corUnica }}>Peso:</span>
              {peso}
            </p>
            <p>
              <span style={{ corUnica }}>Divisão: </span>
              {divisao}
            </p>
            <p>
              <span style={{ corUnica }}>Conferêcia: </span>
              {conferencias}
            </p>
            <p>
              <span style={{ corUnica }}>Universidade: </span>
              {universidade}
            </p>
            <p>
              <span style={{ corUnica }}>Posição: </span>
              {posicao}
            </p>
          </div>
        </div>
      </div>
    );
}


export default Jogador