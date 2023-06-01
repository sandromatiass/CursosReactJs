import { useState } from 'react';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer'
import BannerPrincipal from './components/Banner/BannerPrincipal';
import useListaTimes from './components/ListaSuspensa/todosOsTimes';

function App() {
  const [listaTimes, setListaTimes] = useListaTimes();
  const [jogadores, setJogadores] = useState([]);
  
  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  }

  const mudarCorDoTime = (cor, nome) => {
    setListaTimes(listaTimes.map(time => {
      if (time.nome === nome) {
        time.corUnica = cor;
      }
      return time;
    }));
  }

  const deletarColaboradores = () => {
    console.log("teste");
  }

  return (
    <div className="App">
      <BannerPrincipal />
      <Formulario
        times={listaTimes.map(times => times.nome)}
        aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}
      />

      {listaTimes.map(times => (
        <Time
          key={times.nome}
          nome={times.nome}
          mudarCor={mudarCorDoTime}
          corCard={times.corUnica}
          corUnica={times.corUnica}
          aoDeletar={deletarColaboradores}
          jogadores={jogadores.filter(jogador => jogador.times === times.nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
