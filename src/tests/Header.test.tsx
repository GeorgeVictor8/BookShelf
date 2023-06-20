import Header from "../UI/Header";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./renderWrapper";

describe("header rendering", () => {
  test("login", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
  });
});
