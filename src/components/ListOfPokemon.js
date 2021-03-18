import React, {useState} from 'react';

const ListOfPokemon = ({pressButton, props}) => {

    const [pokemon, setPokemon] = useState([])

    return(
        <div>
            <button onClick={pressButton}>Fetch Pokemon</button>
        </div>
    )
}


export default ListOfPokemon;
