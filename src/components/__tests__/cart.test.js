import Cart from "../Cart";
import Header from "../Header";
import RestaruntMenu from "../RestaruntMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/restuarantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("This is test case for the cart functionality", () => {
  it("should load the restaurant menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaruntMenu />
          </Provider>
        </BrowserRouter>
      )
    );
    const accHeadr = screen.getByText("Signature Salads (3)");
    fireEvent.click(accHeadr);
    const items = screen.getAllByTestId("fooditems").length;
    expect(items).toBe(3);

    const addBtn = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  });
});
