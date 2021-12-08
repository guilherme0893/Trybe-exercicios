import React, {Component} from 'react';
// import pokemons from './Data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render () {
    const { pokemons } = this.props
    // console.log(pokemons)
    // console.log(typeof pokemons)
    // console.log(pokemons[0]['name'])
    // console.log(this.props)
    // ESSE PROPS RECEBE O TESTE QUE COLOQUEI EM APP!!!
    // porque no pai, que é o app, o teste foi passado via props!
    // console.log(typeof pokemons)
    
    return (
      <div className = 'pokedex'>
        {pokemons.map(pokemon => <Pokemon pokemon = {pokemon}/>)}
      </div>
    )
  }
}

export default Pokedex;