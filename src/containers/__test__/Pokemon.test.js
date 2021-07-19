import * as ReactReduxHooks from "../../react-redux-hooks";

import { Pokemon } from "../Pokemon";
import React from "react";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import thunk from "redux-thunk";

const poke = {
  loading: false,
  data: {
    ivysaur: {
      abilities: [
        {
          ability: {
            name: "run",
          },
        },
      ],
      sprites: {
        back_default: "backdefalut",
        front_default: "frontdefault",
        back_shiny: "backshiny",
        front_shiny: "frontshiny",
      },
      stats: [
        {
          base_stat: 65,
          stat: {
            name: "hp",
          },
        },
      ],
    },
  },
  error: "",
};

const match = {
  params: {
    name: "ivysaur",
  },
};

describe("Pokemon", () => {
  // eslint-disable-next-line no-unused-vars
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    // mocking store
    store = configureStore([thunk])(poke);

    // mocking useEffect
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    // mocking useSelector on our mock store
    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation((state) => store.getState(state));

    // mocking useDispatch on our mock store
    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);

    // shallow rendering
    wrapper = shallow(<Pokemon match={match} store={store} />);
  });

  describe("on mount", () => {
    it("should dispatch getSinglePokemon action to store", () => {
      const actions = store.getActions();
      expect(actions).toBeInstanceOf(Array);
    });
  });
});
