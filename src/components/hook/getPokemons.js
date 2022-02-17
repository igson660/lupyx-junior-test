export const getPokemons = async () => {
const data = fetch("https://pokeapi.co/api/v2/ability/?offset=0&limit=25");

const { results } = await data

console.log(results);
}