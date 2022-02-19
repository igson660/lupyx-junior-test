const getNamePokemons = async (qty) => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${qty}&limit=25`);
    const { results } = await data.json();
    return results

  } catch(error) {
    return error.message
  }
}

const getImagePokemons = (pokemonsName) => {
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

export const getPokemons = async (qty) => {
  const offSet = qty ? qty : 0;
  const getNames = await getNamePokemons(offSet);
  const getImages = await getImagePokemons(getNamePokemons(offSet));
  const names = [];

  getNames.forEach(({ name }) => names.push(name));
  const data = { names, getImages };
  return data
}

getPokemons()