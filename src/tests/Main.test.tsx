import { screen } from "@testing-library/react";
import { renderWithProviders } from "./renderWrapper";
import Main from "../pages/Main";
import BooksList from "../components/BooksList";
import Loader from "../UI/Loader";




describe("Main rendering", () => {
  test("rendering without any api calls", () => {
    renderWithProviders(<Main />);
    renderWithProviders(<BooksList />);
    renderWithProviders(<Loader />);
    expect(screen.getByTestId("loaderComponentId")).toBeTruthy();
  });
});
