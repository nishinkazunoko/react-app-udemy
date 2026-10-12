import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon,getPokemon } from './utilis/pokemon';
import Card from './components/Card/card';
function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setpokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全て取得
      let res = await getAllPokemon(initialURL);
      loadPokemon(res.results);
      setLoading(false);
      console.log(res)
      // 個別に取得
      
    }
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) =>{
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        // console.log(pokemon)
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setpokemonData(_pokemonData);
  };
console.log(pokemonData)

   return (
    <div>
      {loading ? 
      <h1>Load中</h1>:
      <div className="pokemonCardContainer">
        {pokemonData.map((pokemon, i ) => {
          return <Card key={i} pokemon={pokemon} />;
        })}
      </div>
      }

    </div>
  );
}

export default App;
