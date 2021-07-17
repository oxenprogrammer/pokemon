import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import { getSinglePokemon } from "../redux/actions";
import { useEffect } from "react";

export const Pokemon = (props) => {
  const pokemanName = props.match.params.name;

  useEffect(() => {
    dispatch(getSinglePokemon(pokemanName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonReducer);

  const getPokemon = () => {
    if (pokemon.loading) {
      return <p>loading...</p>;
    }
    if (!_.isEmpty(pokemon.data[pokemanName])) {
      const pokemonData = pokemon.data[pokemanName];
      return (
        <>
          <div>
            <h2>Sprite</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemanName} />
            <img src={pokemonData.sprites.back_default} alt={pokemanName} />
            <img src={pokemonData.sprites.front_shiny} alt={pokemanName} />
            <img src={pokemonData.sprites.back_shiny} alt={pokemanName} />
          </div>
          <div>
            <h2>Stats</h2>
            {pokemonData.stats.map((element) => (
              <div key={element.stat.name}>
                <p>
                  {element.stat.name} {element.base_stat}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2>Abilities</h2>
            {pokemonData.abilities.map((element) => (
              <div key={element.ability.name}>
                <p>{element.ability.name}</p>
              </div>
            ))}
          </div>
        </>
      );
    }
    if (pokemon.error !== "") {
      return <p>error...</p>;
    }
    return <p>unable to load pokemon now, try later ...</p>;
  };
  return <div>{getPokemon()}</div>;
};
