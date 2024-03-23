import { render, screen } from '@testing-library/react';
import AppQuotes from './App';

test('renders learn react link', () => {
  render(<AppQuotes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
