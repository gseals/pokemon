// this container will encapsulate our loop
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';

// left this type of export in because I'm not used to them and want the experience
// eslint-disable-next-line import/prefer-default-export
export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  return (
    <div className="container">
      {pokemons
        && pokemons.map((pokemon) => <Pokemon
        key={pokemon.id}
        pokemon={pokemon}/>)}
    </div>
  );
}
