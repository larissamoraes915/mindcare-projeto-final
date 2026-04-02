import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renderiza texto da home", () => {
  render(<Home />);

  const texto = screen.getByText(/MindCare/i);

  expect(texto).toBeInTheDocument();
});
