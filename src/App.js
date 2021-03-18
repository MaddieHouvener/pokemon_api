import React, { useState } from 'react';
import './App.css';
import ListOfPokemon from './components/ListOfPokemon'
import axios from 'axios';

function App() {

    const [pokemon, setPokemon] = useState([])

    const pressButton = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&')
        .then(response=> {
            console.log(response.data.results);
            setPokemon(response.data.results);
        })
        .catch(err => {console.log(err)})
    }
        
    return (
        <div className="App">
            <h1>Pokemon API Using Axios</h1>
            <ListOfPokemon pressButton={pressButton}/>
            {
                pokemon.map((poke, idx) => 
                <div>
                    <li>{poke.name}</li>
                </div>
                
                )
            }
        </div>
    );
}


export default App;