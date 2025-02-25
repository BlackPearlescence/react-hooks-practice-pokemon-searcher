import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList, setPokemonList, searchQuery}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())).map(pokemon => 
      <PokemonCard 
      key={pokemon.id}
      pokemon={pokemon}
      /> )}
    </Card.Group>
  );
}

export default PokemonCollection;
