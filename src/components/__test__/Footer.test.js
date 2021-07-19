import { Footer } from "../Footer";
import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

describe("Footer Component", () => {
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

  it("should render the Footer", () => {
    act(() => {
      render(<Footer />, container);
    });
    expect(container).toBeDefined();
  });
});
