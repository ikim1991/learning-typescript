import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from './actions/PokemonActions';
import { AppState } from './store';

function App() {

  const dispatch = useDispatch()
  const [pokemonName, setPokemonName] = useState("")
  const pokemonState = useSelector((state: AppState) => state.pokemon)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPokemonName(e.target.value)
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName))
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>SEARCH</button>
      <div>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="pokemon_sprite"/>
            <div>
              {pokemonState.pokemon.abilities.map((ability)=><p>{ability.ability.name}</p>)}
            </div>
            <div>
              {pokemonState.pokemon.stats.map(stat => <p>{stat.base_stat}</p>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
