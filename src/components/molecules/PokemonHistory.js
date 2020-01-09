import React from 'react'
import PokemonListItem from '../atoms/PokemonListItem';
import PokemonContext from '../../providers/PokemonContext';



const PokemonHistory = () => {
  return (
    <div style={{overflowY: 'scroll'}}>
      <h3>History</h3>
      <PokemonContext.Consumer>
        {({ history }) => {
          return history.map((pokemon, index) => {
            return <PokemonListItem key={'histpoke_' + index} pokemon={pokemon} />
          })
        }}
      </PokemonContext.Consumer>
    </div>
  );
}

export default PokemonHistory;