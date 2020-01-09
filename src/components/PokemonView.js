import React from 'react'
import PokemonContext from '../providers/PokemonContext';

const cssStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  border: 'solid 5px #FF0000',
  borderRadius: '50px',
  backgroundColor: "#FFF",
  padding: '50px 5px 50px 5px',
  margin: '20px'
}

const PokemonView = () => {
  return (
    <div style={cssStyle}>
      <PokemonContext.Consumer>
        {({ selectedPokemon }) => {
          if (selectedPokemon == null)
            return <div>No Pokemon Selected</div>
          else 
            return <div>{selectedPokemon.name}</div>
        }}
      </PokemonContext.Consumer>
    </div>
  );
}

export default PokemonView;