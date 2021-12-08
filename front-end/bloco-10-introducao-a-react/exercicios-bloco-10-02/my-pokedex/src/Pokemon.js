import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Pokedex from './Pokedex';

class Pokemon extends Component {
  render () {
    //  pokemon é desestruturado seguindo o padrão React
    // pokemon aqui remete ao map do pokemons no arquivo pokedex
    // e via props ele é passado desestruturado pra o pokemon.js
    const { pokemon: {name, type, averageWeight, image}} = this.props
    // console.log(this.props)
    return (
      // vamos gerar o card com as infos desestruturadas em tags
      // atenção que o averageWeight tem dois values acessíveis!!
      <ul>
        <li>{name}</li>
        <li>{type}</li>
        <li>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</li>
        <div>
          <img src = {image} alt = {name}/>
        </div>        
      </ul>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired
};

export default Pokemon;