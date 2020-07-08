import React from 'react';

// left this type of export in because I'm not used to them and want the experience
// eslint-disable-next-line import/prefer-default-export
export function Pokemon({ pokemon }) {
  return (
    <div className='pokemon'>
      <div className='pokemon__name'>
        <p>{pokemon.name}</p>
      </div>
      <div className='pokemon__meta'>
        <span>Max HP: {pokemon.maxHP}</span>
        <span>Max CP: {pokemon.maxCP}</span>
      </div>
      <div className='pokemon__image'>
      <img src={pokemon.image} alt={pokemon.name}/>
      </div>
      <div className='pokemon__types'>
        {pokemon
        && pokemon.types
          .slice(0, 3)
          .map((type) => (
            <span key={`${type}`}>{type}</span>
          ))}
      </div>
      <div className='pokemon__attacks'>
        {pokemon
        && pokemon.attacks
          && pokemon.attacks.special
            .slice(0, 3)
            .map((attack) => (
            <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
            ))}
      </div>
    </div>
  );
}
