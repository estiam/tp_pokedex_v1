import React, { useState } from 'react'
import PokemonContext from './PokemonContext';

const demoData = [
  {
    name: "Ditto",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  {
    name: "Raïchu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  {
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
]

const PokemonContextProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [history, setHistory] = useState([]);

  const selectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);

    let temp = [pokemon, ...history];

    temp = temp.filter((element, index, self) =>
      self.findIndex(t => t.name === element.name) === index);

    setHistory(temp);
    // mettre à jour l'historique avec uniquement des valeurs uniques
  }

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, history, selectPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContextProvider;