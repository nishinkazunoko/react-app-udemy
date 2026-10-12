import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon , getPokemon} from './utilis/pokemon';
import Card from './components/Card/card';
function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemondata] = useState([]);
  useEffect(() => { 
    const fetchPokemonData = async () =>{ //非同期
      // 全てのポケモン情報を取得
      let res = await getAllPokemon(initialURL);

      //各ポケモンの詳細なデータを取得
      await loadPokemon(res.results);

      // console.log(res);
      setLoading(false);//データを取得できたのでLaodingはfalse
    };
    fetchPokemonData();
  },[]);

  const loadPokemon = async (data) =>{//res.resultsでもらったデータ
    let _pokemonData = await Promise.all(
      //data は詳細取得前のポケモン一覧で、_pokemonData は各ポケモンの詳細を取得した後のデータ全部
      data.map((pokemon) => {
        // console.log(pokemon)
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );//一匹ずつのポケモンデータがfetchされるのを待つのでall

    setPokemondata(_pokemonData);
  };
console.log(pokemonData)

   return (
    <div className='App'>
      {loading ? (
        <h1>Load中</h1>//trueの時
      ):
      <>
        <div className='pokemonCardContainer'>
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon ={pokemon} />;
          })}
        </div>
      </>
    }
    </div>
  );
}

export default App;
