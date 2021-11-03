import React, {Component} from 'react';
// import pokemons from './Data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render () {
    const { pokemons } = this.props
    // console.log(pokemons);
    // console.log(typeof pokemons)
    // console.log(this.props)
    // console.log(typeof this.props)
    // tanto pokemons como this.props são objetos e são iguais, a diferença é a desestruturação
    // então o this.props é uma forma de acessar as informações do objeto!!!
    return (
      <div className = 'pokedex'>
        {pokemons.map(pokemon => <Pokemon pokemon = {pokemon}/>)}
      </div>
    )
  }
}

export default Pokedex;