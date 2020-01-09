import React from 'react'
import PokemonContext from '../../providers/PokemonContext'

const cssStyle = {
  display: 'flex',
  backgroundColor: '#CCC',
  borderRadius: '15px',
  padding: '5px',
  margin: '5px',
}

const PokemonListItem = ({ pokemon }) => {
  return (
    <div style={cssStyle}>
      <PokemonContext.Consumer>
        {({ selectPokemon }) => {
          return (
            <div onClick={() => selectPokemon(pokemon)}>
              <div><img src={pokemon.image} alt={pokemon.name} /></div>
              <div><h4>{pokemon.name}</h4></div>
            </div>
          );
        }}
      </PokemonContext.Consumer>
    </div>
  );
}

export default PokemonListItem;