export const getPokemons = async (data) => {
  const offSet = data ? data : 0

  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=25`);
    const { results } = await data.json();
    return results;

  } catch(error) {
    return error.message
  }
}

export const getImagePokemons = async () => {

  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-form/2dddd/`);
    const { sprites: { back_default}} = await data.json();
    return back_default;

  } catch(error) {
    return error.message
  }
}
