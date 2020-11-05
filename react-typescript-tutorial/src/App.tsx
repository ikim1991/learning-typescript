import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { GetPokemon} from './actions/PokemonActions';

function App() {

  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("")
  const pokemonState = useSelector((state: RootStore) => state.pokemon)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value)
  }

  const handleSearch = () => {
    dispatch(GetPokemon(pokemonName))
  }

  console.log("pokemon state:", pokemonState)
  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSearch}>Search</button>
      <div>
        {
          pokemonState.pokemon && (
            <div>
              <img src={pokemonState.pokemon.sprites.front_default} alt="pokemon_sprites"/>
              {pokemonState.pokemon.abilities.map((ability, index) => {
                return <p key={index}>{ability.ability.name}</p>
              })}
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
