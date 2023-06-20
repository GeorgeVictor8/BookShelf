import { screen } from "@testing-library/react";
import { renderWithProviders } from "./renderWrapper";
import Error from "../pages/Error";

describe("Error rendering", () => {
  test("rendering", () => {
    renderWithProviders(<Error />);
    expect(screen.getAllByText("404 | Page Not Found")).toBeTruthy();
  });

});
