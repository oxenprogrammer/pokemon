import { Provider } from "react-redux";
import React from "react";
import { createStore } from "redux";
import { reducer } from "../redux/reducers";
import { render } from "@testing-library/react";

export const renderWithState = (
  ui,
  { initialState, ...renderOptions } = {}
) => {
  const store = createStore(reducer, initialState);
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
