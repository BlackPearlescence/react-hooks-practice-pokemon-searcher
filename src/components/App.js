import React, {useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(()=>
    fetch(" http://localhost:3001/pokemon")
      .then((res)=>res.json())
      .then((pokemonData) => setPokemonList(pokemonData)
      ),[])

  useEffect(() => {}, [pokemonList])

  return (
    <div className="App">
      <PokemonPage
      pokemonList={pokemonList}
      setPokemonList={setPokemonList}/>
    </div>
  );
}

export default App;
