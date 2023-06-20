import { screen } from "@testing-library/react";
import { renderWithProviders } from "./renderWrapper";
import Header from "../UI/Header";
import Root from "../UI/Home";

describe("Root rendering", () => {
  test("rendering", () => {
    renderWithProviders(<Root />);
    renderWithProviders(<Header />);
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
  });
});
