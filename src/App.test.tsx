import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo App title', () => {
  render(<App />);
  expect(screen.getByText(/todo app/i)).toBeInTheDocument();
});
