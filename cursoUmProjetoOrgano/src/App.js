import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer'
import { listaTimes } from './components/ListaSuspensa/Lista';

function App() {

  const [jogadores, setJogadores] = useState([])
  
  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={listaTimes.map((times) => times.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />

      {listaTimes.map((times) => (
        <Time
          key={times.nome}
          nome={times.nome}
          corPrimaria={times.corPrimaria}
          corSecundaria={times.corSecundaria}
          //aqui e passado um estado que serve como gatilho para renderizar o codigo
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
