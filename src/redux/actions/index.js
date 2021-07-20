import {
  CHANGE_FILTER,
  FAILURE,
  FAILURE_POKEMON,
  LOADING,
  LOADING_POKEMON,
  SUCCESS,
  SUCCESS_POKEMON,
} from "./constants";

const url = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });

    const perPage = 9;
    const offset = page * perPage - perPage;

    const response = await fetch(`${url}?limit=${perPage}&offset=${offset}`);
    const result = await response.json();
    dispatch({
      type: SUCCESS,
      payload: result.results,
      count: result.count,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.message,
    });
  }
};

export const getSinglePokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_POKEMON,
    });

    const response = await fetch(`${url}/${pokemon}`);
    const result = await response.json();
    dispatch({
      type: SUCCESS_POKEMON,
      payload: result,
      pokemon,
    });
  } catch (error) {
    dispatch({
      type: FAILURE_POKEMON,
      payload: error.message,
    });
  }
};

export const changeFilter = (pokemons) => ({
  type: CHANGE_FILTER,
  payload: pokemons,
});
