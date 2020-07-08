import gql from 'graphql-tag';

// left this type of export in because I'm not used to them and want the experience
// eslint-disable-next-line import/prefer-default-export
export const GET_POKEMONS = gql`
query pokemons($first: Int!) {
  pokemons(first: $first) {
    id
    name
    image
    maxHP
    maxCP
    types
    attacks {
      special {
        name
        damage
      }
    }
  }
}
`;
