import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import {get_data} from './gql/Query'

function App() {
  const {loading, error, data} = useQuery(get_data)
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
       {loading ? (<img src={logo} className="App-logo" alt="logo" />
       ): error  ? (
         <p>Error : {error}</p>
       ) : (
         <div>
           {data.pokemon_v2_pokemonspecies.map((pokemon)=>{
             return (
               <p>
                 {pokemon.id} {pokemon.name}
               </p>
             )
           })}
         </div>
       )}
      </header>
    </div>
  );
}

export default App;
