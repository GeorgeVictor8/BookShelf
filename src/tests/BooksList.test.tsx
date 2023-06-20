import React from "react";
import BooksList from "../components/BooksList";
import { renderWithProviders } from "./renderWrapper";
import { screen } from '@testing-library/react';



describe("BooksList Component is rendered", () => {
  test("renders", () => {
    renderWithProviders(<BooksList />);
    expect(screen.getByTestId("loaderComponentId")).toBeTruthy();
  });
  test('test',()=>{
    jest.mock("../components/BookItem.tsx", () => ({
      ChildComponent: () => <div data-testid="ChildComponent">ChildComponent</div>,
  }));
  
          const { getByTestId } = renderWithProviders(<BooksList />);
          // eslint-disable-next-line testing-library/prefer-screen-queries
          expect(getByTestId("ChildComponent")).toBeInTheDocument();
      });
  /*  test('book list rendered', ()=>{
    renderWithProviders(<BooksList />);
    const dispatch = useAppDispatch()
    const { data } = useAppSelector<BooksState>((state) => state.books)
    dispatch(getBooksData());
    expect(get)
  }) */
});
