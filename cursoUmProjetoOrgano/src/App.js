import { useState } from 'react';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer'
import BannerPrincipal from './components/Banner/BannerPrincipal';
import useListaTimes from './components/ListaSuspensa/todosOsTimes';

function App() {

  const [listaTimes, setListaTimes] = useListaTimes();
  const [jogadores, setJogadores] = useState([])
  
  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador]);
  }
  
function deletarColaboradores(){
  console.log("teste")
}

function mudarCorDoTime(cor, nome) {
  setListaTimes(listaTimes.map(time =>{
    if(time.nome === nome){
      time.corSecundaria = cor;
    }
    return time;
  }))
}

  return (
    <div className="App">
      <BannerPrincipal />
      <Formulario
        times={listaTimes.map((times) => times.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />

      {listaTimes.map((times) => (
        <Time
          key={times.nome}
          nome={times.nome}
          mudarCor={mudarCorDoTime}
          corPrimaria={times.corPrimaria}
          corSecundaria={times.corSecundaria}
          //aqui e passado um estado que serve como gatilho para renderizar o codigo
          aoDeletar={deletarColaboradores}
          jogadores={jogadores.filter(
            (jogador) => jogador.times === times.nome
          )}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
