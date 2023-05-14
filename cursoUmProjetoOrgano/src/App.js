import { useState } from 'react';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer'
import { listaTimes } from './components/ListaSuspensa/Lista';
import BannerPrincipal from './components/Banner/BannerPrincipal';


function App() {

  const [jogadores, setJogadores] = useState([])
  
  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador]);
  }

  //função deletar
  function deletarJogador(){
    console.log('teste de delete')
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
          corPrimaria={times.corPrimaria}
          corSecundaria={times.corSecundaria}
          //aqui e passado um estado que serve como gatilho para renderizar o codigo
          jogadores={jogadores.filter(
            (jogador) => jogador.times === times.nome)}
            aoDeletar={deletarJogador}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
