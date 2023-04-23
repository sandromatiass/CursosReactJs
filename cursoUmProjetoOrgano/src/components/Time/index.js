import Jogador from '../Jogador'
import './Time.css' 

const Time = (props) => {
    
    const fundo = {backgroundColor:props.corSecundaria}
    
    
    return (
      //comparação se e verdadeiro ou falso e escondendo a sessão em nulo
      props.jogadores.length > 0 && (
        <section className="time" style={fundo}>
          <h3 style={ {borderColor: props.corPrimaria } }>{props.nome}</h3>

          <div className="jogadores">
            {props.jogadores.map((jogador) => (
              <Jogador
                //o nome da prop deve ter o nome do parametro
                corDeFundo={props.corPrimaria}
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
              />
            ))}
          </div>
        </section>
      )
    );
}



export default Time