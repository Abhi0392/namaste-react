import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  it("Should load Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button in Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
  });

  it("Should load text in Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByText("Submit");
    expect(heading).toBeInTheDocument();
  });

  it("Should load input name  in Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByPlaceholderText("name");
    expect(heading).toBeInTheDocument();
  });
  it("Should load 2 input boxes  in Contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
