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
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    store = configureStore([thunk])(poke);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation((state) => store.getState(state));

    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<Pokemon match={match} store={store} />);
  });

  describe("on mount", () => {
    it("should dispatch getSinglePokemon action to store", () => {
      const actions = store.getActions();
      expect(actions).toBeInstanceOf(Array);
    });
    it("should return a pokemon", () => {
      setImmediate(() => {
        expect(wrapper.find(".loading").first().exists()).toBe(false);
        expect(wrapper.find(".stats").first().exists()).toBe(true);
      });
    });
  });
});
