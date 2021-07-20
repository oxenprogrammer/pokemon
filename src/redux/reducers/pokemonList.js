import { FAILURE, LOADING, SUCCESS } from "../actions/constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
  count: 0,
};

export const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        count: action.count,
        data: action.payload,
      };
    default:
      return state;
  }
};
