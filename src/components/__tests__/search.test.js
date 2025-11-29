import { screen, render, fireEvent } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resRestaurantList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should render the body component with Search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchbtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchbtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
  expect(searchbtn).toBeInTheDocument();
});

it("should filter top rated Restruants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(9);
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(topRatedButton);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(7);
});
