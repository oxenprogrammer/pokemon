import Header from "../Header";
import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

describe("Header Component", () => {
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

  it("should render the Navbar", () => {
    act(() => {
      render(<Header />, container);
    });
    expect(container).toBeDefined();
  });

  it("should not be an array", () => {
    act(() => {
      render(<Header header="header" />, container);
    });
    expect(container).not.toBeInstanceOf(Array);
  });
});
