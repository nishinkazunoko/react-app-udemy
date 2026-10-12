import React from 'react'

const Card = ({pokemon}) => {
  return (
    <div className='card'>
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className='cardname'>{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return(
          <div>
            <span className='typeName'>{type.type.name}</span>
          </div>
          ) 
        })}
      </div>
      <div className="caedInfo">
        <div className='cardData'>
          <p>重さ：{pokemon.weight}</p>
        </div>
        <div className='cardData'>
          <p>高さ：{pokemon.height}</p>
        </div>
        <div className='cardData'>
          <p>ability：{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Card