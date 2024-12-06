import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Form from './components/Form'

test('renders the correct content on page load', () => {
  const viewPastResponses = jest.fn();
  render(<App />);
  screen.getByText('Magic 8-Ball');
  screen.getByRole('img');
  render(<Form />);
  render(<button onClick={viewPastResponses}>View previous results</button>);
})

test("calls viewPastResponses when previous results button is clicked", () => {
  const viewPastResponses = jest.fn();
  const { container } = render(<button onClick={viewPastResponses}>View previous results</button>);
  const button = container.firstChild;
  fireEvent.click(button);
  expect(viewPastResponses).toHaveBeenCalledTimes(1);
});
