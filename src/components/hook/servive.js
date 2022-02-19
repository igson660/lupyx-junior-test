export const getPokemons = async (data) => {
  const offSet = data ? data : 0
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=25`);
    const { results } = await data.json();
    return results

  } catch(error) {
    return error.message
  }
}

export const getImagePokemons = (pokemonsName) => {
  const images = []
  pokemonsName
    .then((pokemons) => pokemons
      .map(({ url }) =>  fetch(url)
        .then((res) => res.json()
          .then((res) => fetch(res.forms[0].url)
            .then((res) => res.json()
              .then((res) => images.push(res.sprites.back_default)))))));

  return images
}

console.log(getImagePokemons(getPokemons()));
