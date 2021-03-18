import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonButton from './components/PokemonButton';


function OldApp() {

const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);


  return (
    <div className="App">
      <h1>Pokemon API</h1>
      
      <PokemonButton />
    </div>
  );
}

export default OldApp;
