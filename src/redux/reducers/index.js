import { combineReducers } from "redux";
import { filterReducer } from "./filter";
import { pokemonListReducer } from "./pokemonList";
import { pokemonReducer } from "./pokemon";

export const reducer = combineReducers({
  pokemonListReducer,
  pokemonReducer,
  filterReducer,
});
