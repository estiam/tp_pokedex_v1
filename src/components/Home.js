import React from 'react'
import Sidebar from './Sidebar';
import PokemonView from './PokemonView';
import PokemonContextProvider from '../providers/PokemonContextProvider';

const cssStyle = {
  display: 'flex',
  height: '100%'
}

const Home = () => {
  return (
    <div style={cssStyle}>
      <PokemonContextProvider>
        <Sidebar />
        <PokemonView />
      </PokemonContextProvider>
    </div>
  );
}

export default Home;