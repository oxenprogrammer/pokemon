import {
  FAILURE_POKEMON,
  LOADING_POKEMON,
  SUCCESS_POKEMON,
} from "../actions/constants";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_POKEMON:
      return { ...state, loading: true, error: "" };
    case SUCCESS_POKEMON:
      return {
        ...state,
        loading: false,
        data: { ...state.data, [action.pokemon]: action.payload },
      };
    case FAILURE_POKEMON:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
