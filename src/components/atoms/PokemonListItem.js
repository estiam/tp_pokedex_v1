import React from 'react'

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
      <div><img src={pokemon.image} alt={pokemon.name} /></div>
      <div><h4>{pokemon.name}</h4></div>
    </div>
  );
}

export default PokemonListItem;