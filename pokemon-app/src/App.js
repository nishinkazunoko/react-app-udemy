import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon,getPokemon } from './utilis/pokemon';
import Card from './components/Card/card';
import Navbar from './components/Navbar/Navbar';
function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setpokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全て取得
      let res = await getAllPokemon(initialURL);
      loadPokemon(res.results);
      setLoading(false);
      setNextURL(res.next)
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
// console.log(pokemonData)

const handleNextPage = async () => {
  setLoading(true);
  let data = await getAllPokemon(nextURL);
  // console.log(data);
  await loadPokemon(data.results);
  setLoading(false);
};
const handlePrevPage = () => {
  
};

   return (
    <>
    <Navbar />
    <div className='App'>
      {loading ? 
      <h1>Load中</h1>:
      <div className="pokemonCardContainer">
        {pokemonData.map((pokemon, i ) => {
          return <Card key={i} pokemon={pokemon} />;
        })}
      </div>
      }
      <div className="btn">
        <button onClick={handlePrevPage}>前へ</button>
        <button onClick={handleNextPage}>次へ</button>

      </div>
    </div>

    </>
  );
}

export default App;
