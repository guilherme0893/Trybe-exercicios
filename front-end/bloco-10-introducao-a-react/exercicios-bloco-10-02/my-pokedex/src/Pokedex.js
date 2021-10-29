import React, {Component} from 'react';
// import pokemons from './Data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render () {
    const { pokemons } = this.props
    return (
      <div className = 'pokedex'>
        {pokemons.map(pokemon => <Pokemon pokemon = {pokemon}/>)}
      </div>
    )
  }
}

export default Pokedex;