import Search from "../pages/Search";
import { renderWithProviders } from "./renderWrapper";

describe("test", () => {
  test("renders", () => {
    renderWithProviders(<Search />);
  });
});
