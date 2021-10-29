import './App.css';
import React, {Component} from 'react';
import pokemons from './Data';
// import Pokemon from './Pokemon';
import Pokedex from './Pokedex';

// Lembra de importar todos os dados!!


// 'Teoricamente' é o arquivo mais simples, onde é chamada a div pai com o {} entre tags
class App extends Component {
  render () {
    return (
      <div>
        <Pokedex pokemons = {pokemons}/>
      </div>
    )
  }
}

export default App;
