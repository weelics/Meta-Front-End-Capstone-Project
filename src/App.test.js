import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

test("renders without error", () => {
  render(<App />);
});

test("renders navbar component", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'Make a Reservation' });

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

test('navbar links navigate to the correct pages', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'Make a Reservation' });
  fireEvent.click(homeLink);
  expect(screen.getByText('Home')).toBeInTheDocument();

  fireEvent.click(aboutLink);
  expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
});


test('footer links navigate to the correct pages', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'Make a Reservation' });
  fireEvent.click(homeLink);
  expect(screen.getByText('Home')).toBeInTheDocument();

  fireEvent.click(aboutLink);
  expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
});
