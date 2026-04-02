import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

test("botão muda ao clicar", () => {
  render(<Card titulo="Dra. Ana" descricao="Teste" />);

  const botao = screen.getByText(/Agendar sessão/i);

  fireEvent.click(botao);

  const novoTexto = screen.getByText(/Sessão agendada/i);

  expect(novoTexto).toBeInTheDocument();
});
