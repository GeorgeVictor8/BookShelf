import BookShelf from "../components/BookShelf";
import { Shelves } from "../redux/booksModel";
import { renderWithProviders } from "./renderWrapper";
import { screen } from "@testing-library/react";

describe("BookShelf Component is rendered with no shelf data", () => {
  test("renders", () => {
    renderWithProviders(
      <BookShelf
        shelf={Shelves.read}
        books={[]}
        title={"Read"}
        onRenderShelf={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(
      screen.getByText("No books on this shelf, try adding new ones")
    ).toBeTruthy();
  });
});
