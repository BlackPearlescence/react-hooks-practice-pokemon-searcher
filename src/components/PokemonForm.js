import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemonList, setPokemonList}) {
  const [pokemonFormData, setPokemonFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    console.log(name)
    console.log(value)
    console.log(e)
    setPokemonFormData({...pokemonFormData, [name]: value
    })
    console.log(pokemonFormData);
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form...");
          const newPokemon = {
            name: pokemonFormData.name,
            hp: pokemonFormData.hp,
            sprites:{
              front: pokemonFormData.frontUrl,
              back: pokemonFormData.backUrl,
            }
          }
          fetch("http://localhost:3001/pokemon", {
            method: "POST",
            body: JSON.stringify(newPokemon),
            headers: {
              "Content-Type": "application/json"
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("Success: ", data)
              setPokemonList([...pokemonList, data])
            })
            .catch((err) => console.log("Failure: ", err))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" 
          onChange={handleFormChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
          onChange={handleFormChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
