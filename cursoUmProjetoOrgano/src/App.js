import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import { listaTimes } from './components/ListaSuspensa/Lista';

function App() {

  const [jogadores, setJogador] = useState([])
  
  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogador(...jogadores, jogador)
  }


  return (
    <div className="App">
      <Banner />
      <Formulario
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />

      {listaTimes.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>) }
      
    </div>
  );
}
export default App;
