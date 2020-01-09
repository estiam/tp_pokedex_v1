import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import PokemonView from './components/PokemonView';
import PokemonContextProvider from './providers/PokemonContextProvider';

const cssStyle = {
  display: 'flex',
  height: '100%'
}

const App = () => {
  return (
    <div style={cssStyle}>
      <PokemonContextProvider>
        <Sidebar />
        <PokemonView />
      </PokemonContextProvider>
    </div>
  );
}

export default App;