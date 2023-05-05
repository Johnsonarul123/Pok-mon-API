import { useState } from "react";
function App() {
  const [pokemonName, setPokemonName] = useState("ditto");
  const [chosen, setChosen] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });

  const searchPokemon = () => {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPokemonData({
          name: pokemonName,
          species: response.species.name,
          img: response.sprites.front_default,
          hp: response.stats[0].base_stat,
          attack: response.stats[1].base_stat,
          defense: response.stats[3].base_stat,
          type: response.types[0].type.name
        });
        setChosen(true);
      });
    console.log(response);
  };

  return (
    <div className="App">
      <input
        className="border-b-2 border-black px-4"
        type="text"
        onChange={(e) => {
          setPokemonName(e.target.value);
        }}
      />
      <button
        className="rounded text-white bg-blue-500 p-2 text-sm"
        onClick={searchPokemon}
      >
        Search Pokemon
      </button>

      <div>
        {!chosen ? (
          <h1>Please choose a pokemon</h1>
        ) : (
          <>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.img} alt={pokemonData.name} />
            <h2>{pokemonData.species}</h2>
            <h2>{pokemonData.type}</h2>
            <h2>{pokemonData.hp}</h2>
            <h2>{pokemonData.attack}</h2>
            <h2>{pokemonData.defense}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
