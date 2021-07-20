import { Paginate } from "../Paginate";
import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

describe("Paginate Component", () => {
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

  it("should render the paginate component", () => {
    act(() => {
      render(
        <Paginate
          onPageChange={() => console.log("works")}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          pageCount={234}
        />,
        container
      );
    });
    expect(container).toBeDefined();
  });

  it("should not be an array", () => {
    act(() => {
      render(
        <Paginate
          onPageChange={() => console.log("works")}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          pageCount={234}
        />,
        container
      );
    });
    expect(container).not.toBeInstanceOf(Array);
  });
});
