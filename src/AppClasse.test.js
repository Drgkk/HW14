import { render, screen } from '@testing-library/react';
import AppClasse from './AppClasse';

test('renders learn react link', () => {
  render(<AppClasse />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
