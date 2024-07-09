<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('test that App component renders', () => {
  render(<App />);
});

test('test that new-item-button is a button', () => {
  render(<App />);
  const element = screen.getByTestId('new-item-button');
  expect(element).toBeInTheDocument();
});

test('test that new-item-textfield is a textfield', () => {
  render(<App />);
  const element = screen.getByTestId('new-item-textfield');
  expect(element).toBeInTheDocument();
});

test('renders Todos component with empty todo list', () => {
  render(<App />);
  expect(screen.getByText("You have no todo's left")).toBeInTheDocument();
});

test('test that App component doesn\'t add a blank task', () => {
  render(<App />);
  const addButton = screen.getByTestId('new-item-button');
  fireEvent.click(addButton);
  expect(screen.queryByText("No Due Date Task")).not.toBeInTheDocument();
});



=======
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test that App component renders', () => {
  render(<App />, container);
 });
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
