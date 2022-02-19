import { getPokemons } from "../hook/service"

const Pagination = ({ setPokemons }) => {
  const hendlePokemons =  async ({ target }) => {

    if(target.outerText === '1') {
      const pokemons = await getPokemons();
      setPokemons(pokemons)
    }

    if(target.outerText === '2') {
      const pokemons = await getPokemons(25);
      setPokemons(pokemons)
    }

    if(target.outerText === '3') {
      const pokemons = await getPokemons(50);
      setPokemons(pokemons)
    }

    if(target.outerText === '4') {
      const pokemons = await getPokemons(75);
      setPokemons(pokemons)
    }

    if(target.outerText === '5') {
      const pokemons = await getPokemons(100);
      setPokemons(pokemons)
    }

    if(target.outerText === '6') {
      const pokemons = await getPokemons(125);
      setPokemons(pokemons)
    }


  }
  return(
    <section>
      <button
        type="button"
        onClick={ hendlePokemons }
      >
        1
      </button>
      <button
          type="button"
          onClick={ hendlePokemons }
      >
        2
      </button>
      <button
          type="button"
          onClick={ hendlePokemons }
      >
        3
      </button>
      <button
        type="button"
        onClick={ hendlePokemons }
      >
        4
      </button>
      <button
        type="button"
        onClick={ hendlePokemons }
      >
        5
      </button>
      <button
        type="button"
        onClick={ hendlePokemons }
      >
        6
      </button>
    </section>
  )
}

export default Pagination;