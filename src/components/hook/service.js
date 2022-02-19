export const getPokemons = async (offSet=0) => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=25`);
    const { results } = await data.json();
    const pokemons = [];

    results.map(({ name, url}) => pokemons.push({name, id: url.split('/')[6]}));

    return pokemons

  } catch(error) {
    return error.message
  }
}

