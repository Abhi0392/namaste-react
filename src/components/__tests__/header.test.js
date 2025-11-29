import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should load the header Component with login", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        {" "}
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const headerComponent = screen.getByRole("button", { name: "Login" });
  expect(headerComponent).toBeInTheDocument();
});

it("should load the header Component with cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        {" "}
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("should change the login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        {" "}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  fireEvent.click(loginButton);
  expect(logoutButton).toBeInTheDocument();
});
