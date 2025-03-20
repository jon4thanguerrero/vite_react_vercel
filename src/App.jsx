import { useEffect, useState } from "react";
import axios from "axios";
import "./assets/styles/form.css";
import HorizontalBar from "./components/HorizontalBar";
import Container from "./components/Container";

function App() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type/")
      .then(response => setTypes(response.data.results))
      .catch(error => console.error("Error al obtener tipos de Pokémon:", error.message));
  }, []);

  useEffect(() => {
    if (!selectedType) return;
    axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`)
      .then(response => {
        const pokemonData = response.data.pokemon.map(pokemon => ({
          name: pokemon.pokemon.name,
          id: pokemon.pokemon.url.split("/").slice(-2, -1)[0]
        }));
        setPokemonList(pokemonData);
      })
      .catch(error => console.error(`Error al obtener Pokémon del tipo ${selectedType}:`, error.message));
  }, [selectedType]);

  return (
    <div>
      <HorizontalBar />
      <Container 
        types={types} 
        selectedType={selectedType} 
        setSelectedType={setSelectedType} 
        pokemonList={pokemonList} 
      />
    </div>
  );
}

export default App;