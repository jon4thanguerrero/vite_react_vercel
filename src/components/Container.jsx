function Container({ types, selectedType, setSelectedType, pokemonList }) {
    return (
      <div className="container">
        <div className="pokemon-content">
          <div className="pokemon-selector">
            <label htmlFor="types">Selecciona un tipo de Pokémon:</label>
            <select id="types" onChange={(e) => setSelectedType(e.target.value)}>
              <option value="">-- Selecciona --</option>
              {types.map(type => (
                <option key={type.name} value={type.name}>{type.name}</option>
              ))}
            </select>
          </div>
          <div className="pokemon-list">
            {pokemonList.map(pokemon => (
              <div key={pokemon.id} className="pokemon-card">
                <h2>{pokemon.name}</h2>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
  
export default Container;
  