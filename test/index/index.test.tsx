import { render, screen } from "@testing-library/react";
import ArtistDetail from "components/ArtistDetail";
import Artists from "components/Artists";
import Header from "components/Header";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import Footer from "components/Footer";

describe("Artists", () => {
  let store: any;
  it("Artist component should render", () => {
    <Provider store={store}>
      <Artists />
    </Provider>;
  });
  it("Artist detail component should render", () => {
    <Provider store={store}>
      <ArtistDetail />
    </Provider>;
  });
});

describe("Footert", () => {
  let store: any;
  it("footer", () => {
    render(<Footer />);
  });
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
