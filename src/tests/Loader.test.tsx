import { screen} from "@testing-library/react";
import { renderWithProviders } from "./renderWrapper";
import Loader from "../UI/Loader";



describe("Loader rendering", () => {
    test("rendering", () => {
      renderWithProviders(<Loader />);
      expect(screen.getByTestId("loaderComponentId")).toBeTruthy();
    });
  });