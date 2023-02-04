import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemonList, setPokemonList}) {
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemonList={setPokemonList} pokemonList={pokemonList}/>
      <br />
      <Search onSearchChange={handleSearchChange} searchQuery={searchQuery}/>
      <br />
      <PokemonCollection setPokemonList={setPokemonList} pokemonList={pokemonList} searchQuery={searchQuery}/>
    </Container>
  );
}

export default PokemonPage;
