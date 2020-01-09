import React, { useState } from 'react'
import PokemonListItem from './atoms/PokemonListItem';

const MyCollection = () => {
  const [collection, setCollection] = useState([]);
  const [loaded, setLoaded] = useState();

  const loadCollection = () => {
    setLoaded(true);
    fetch('http://localhost:8000/pokemons')
      .then(response => response.json())
      .then(data => {
        setCollection(data);
      });
  }

  if(!loaded)
    loadCollection();

  return (
    <div>
      {collection.map(pokemon => {
        return (<PokemonListItem pokemon={pokemon} />);
      })}
    </div>
  );
}

export default MyCollection;