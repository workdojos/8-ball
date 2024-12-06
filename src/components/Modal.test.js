import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

test("renders the correct content on page load", () => {
  const viewPastResponses = jest.fn();
  const allResults = [];
  const clearResponses = jest.fn();
  render(
    <Modal
      toggle={viewPastResponses}
      allResults={allResults}
      clear={clearResponses}
    />
  );
  screen.getByRole('table');
  screen.getByRole('button');
});

test('clearResponses gets called on click event', () => {
  const clearResponses = jest.fn();
  const { container } = render(<button className="font-20" onClick={clearResponses}>Clear Responses</button>);
  const button = container.firstChild;
  fireEvent.click(button);
  expect(clearResponses).toHaveBeenCalledTimes(1);;
})

test('handleClick gets called on click event', () => {
  const handleClick = jest.fn();
  const { container } = render(
    <button className="font-20" onClick={handleClick}>
      Exit
    </button>
  );
  const button = container.firstChild;
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
})
