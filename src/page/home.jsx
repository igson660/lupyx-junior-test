import React, { useEffect, useState } from 'react';
import {
  getPokemons,
  // getImagePokemons
} from "../components/hook/servive";
import Pagination from '../components/pagination/Pagination';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if(pokemons.length) getPokemons().then((data) => setPokemons(data));

  }, [pokemons]);

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Pókemon Name</th>
            <th>Pókemon Image</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemons.length > 0 && pokemons.map(({ name }, index) => (
              < tr key={index} >
                <td>{  name }</td>
                {/* <img src={ image } alt={ name } /> */}
              </tr >
            ))
          }
        </tbody>
      </table>
      <Pagination
        pokemons={ pokemons }
        setPokemons={ setPokemons }
      />
    </>
  );
}

export default Home;
