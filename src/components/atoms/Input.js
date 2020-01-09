import React, { useState } from 'react'
import PokemonContext from '../../providers/PokemonContext';

const Input = () => {
  const [pokemonName, setPokemonName] = useState();

  const findPokemon = (selectPokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        selectPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types,
        })
      });
  }

  return (
    <PokemonContext.Consumer>
      {({ selectPokemon }) => {
        return (
          <div>
            <input value={pokemonName} onChange={e => setPokemonName(e.target.value)}></input>
            <button onClick={() => findPokemon(selectPokemon)}>FIND</button>
          </div>
        )
      }}
    </PokemonContext.Consumer>
  );
}

export default Input;