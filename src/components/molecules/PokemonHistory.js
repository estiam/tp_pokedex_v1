import React from 'react'
import PokemonListItem from '../atoms/PokemonListItem';

const demoData = [
  {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
]

const PokemonHistory = () => {
  return (
    <div style={{overflowY: 'scroll'}}>
      <h3>History</h3>
      {demoData.map(pokemon => {
        return <PokemonListItem pokemon={pokemon} />
      })}
    </div>
  );
}

export default PokemonHistory;