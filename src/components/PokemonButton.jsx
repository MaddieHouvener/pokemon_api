import React, { useState } from 'react';

const PokemonButton = () => {

    const [pokemon, setPokemon] = useState([]);

    const pressButton = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&')
            .then(response =>
                response.json())
            .then(response =>
                setPokemon(response.results)
            ).catch(err => {
                console.log('this is the ERROR' + err)
                console.log(err);
            });
    }


    return (
        <div>
            <button onClick={pressButton}>Fetch Pokemon</button>
            {pokemon.map((pokemon, idx) =>
                (<div pokemon={pokemon} idx={idx} key={idx}><li>{pokemon.name}</li></div>))}
        </div>
    )
}

export default PokemonButton;