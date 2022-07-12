import {gql} from '@apollo/client';

export const get_data = gql`
  query getdata {
    pokemon_v2_pokemonspecies (
      order_by: {id : asc}
      where : { pokemon_v2_generation : { name : {_eq : "generation-iii"}}}
    ){
      name
      id
    }
  }
`;