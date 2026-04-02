import { render, screen } from "@testing-library/react";
import Psicologos from "./Psicologos";

test("mostra loading", () => {
  render(<Psicologos />);

  const loading = screen.getByText(/Carregando psicólogos/i);

  expect(loading).toBeInTheDocument();
});
