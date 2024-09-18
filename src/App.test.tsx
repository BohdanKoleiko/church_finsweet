import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('renders the App component without crashing', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/Become a part of our community/i);
  expect(linkElement).toBeInTheDocument();
});
