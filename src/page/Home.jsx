import React, { useEffect, useState } from 'react';
import { getPokemons } from "../components/hook/service";
import Pagination from '../components/pagination/Pagination';
import { Container } from "@mui/material";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if(pokemons.length <= 0) getPokemons().then((res => setPokemons(res)))
  }
  , [pokemons]);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Pókemon Name</th>
            <th>Pókemon Image</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemons.length > 0 && pokemons.map(({ name, id }, index) => (
                <tr key={index} >
                <td>{name}</td>
                <td>
                  <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} 
                    alt={ name} 
                  />
                </td>
              </tr >
            ))
          }
        </tbody>
      </table>
      <Pagination
        pokemons={ pokemons }
        setPokemons={ setPokemons }
      />
    </Container>
  );
}

export default Home;

