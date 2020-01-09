import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import MyCollection from './components/MyCollection';



const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/Add' component={Add} />
      <Route exact path='/Edit/:pokemonId' component={Edit} />
      <Route exact path='/MyCollection' component={MyCollection} />
      {/* <Route exact path='/View/:pokemonId' component={Home} />
      <Route exact path='/Delete/:pokemonId' component={Home} /> */}
    </BrowserRouter>
  );
}

export default App;