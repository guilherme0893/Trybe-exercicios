import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Pokedex from './Pokedex';

class Pokemon extends Component {
  render() {
    //  pokemon é desestruturado seguindo o padrão React
    const { pokemon: {name, type, averageWeight, image}} = this.props;
    return (
      // vamos gerar o card com as infos desestruturadas em tags
      // atenção que o averageWeight tem dois values acessíveis!!
      <div className='pokemon-cards'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src = {image} alt = {name}/>       
      </div>
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