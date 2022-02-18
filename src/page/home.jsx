import React, { useEffect, useState } from 'react';
import { getPokemons, getImagePokemons } from "../components/hook/servive";

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [image, setImage] = useState()

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data))
    getImagePokemons().then((data) => setImage(data))
  }, [pokemons]);

  return(
    <>
      {
        pokemons.map(({ name}, index) => (
          < div key={index} >
            <p>{  name }</p>
            <img src={ image } alt={ name } />
          </div >
        ))
      }
    </>
  );
}

export default Home;
