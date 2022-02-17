export const getPokemons = async (data) => {
  const offSet = data ? data : 0
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/ability/?offset=${offSet}&limit=25`);
    const { results } = await data.json();
    return results;

  } catch(error) {
    return error.message
  }
}
