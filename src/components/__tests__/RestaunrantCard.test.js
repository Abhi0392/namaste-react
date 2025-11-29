import { screen, render } from "@testing-library/react";
import RestaurantCard from "../RestaruntCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

describe("Testcase for the RestaurantCard Component", () => {
  it("should render the Restaurant card component with Props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Burger Hub");
    expect(name).toBeInTheDocument();
  });
});
