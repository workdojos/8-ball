import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

test("renders the correct content on page load", () => {
  render(<Form />);
  screen.getByPlaceholderText("What is your question?");
  screen.getAllByRole("button");
});

test("onChange gets called on input change", () => {
  const handleChange = jest.fn();
  const { container } = render(<input type="text" onChange={handleChange} />);
  const input = container.firstChild;
  fireEvent.change(input, { target: { value: "a" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("a");
});
