export const getAllPokemon = (url) => {
  return new Promise((resolve,reject) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => resolve(data));
    //awaitを使った非同期処理：Promiseの処理が終わるまでawait部分で待つ
  });
}

export const getPokemon = (url) =>{
  return new Promise ((resolve,reject) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => resolve(data));
  });
}; 