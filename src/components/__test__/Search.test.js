import React from "react";
import { Search } from "../Search";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

describe("Search Component", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render a Search Input", () => {
    act(() => {
      render(
        <Search
          name="name"
          id="id"
          label="label"
          onChange={() => console.log("works")}
        />,
        container
      );
    });
    expect(container).toBeDefined();
  });

  it("should not be an array", () => {
    act(() => {
      render(
        <Search
          name="name"
          id="id"
          label="label"
          onChange={() => console.log("works")}
        />,
        container
      );
    });
    expect(container).not.toBeInstanceOf(Array);
  });
});
