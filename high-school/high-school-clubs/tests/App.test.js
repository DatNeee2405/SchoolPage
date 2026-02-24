import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the app without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the navbar', () => {
  render(<App />);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders the club list', () => {
  render(<App />);
  const clubListElement = screen.getByText(/clubs/i);
  expect(clubListElement).toBeInTheDocument();
});