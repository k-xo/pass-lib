// components/TokenSwap/TokenSwap.test.tsx

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TokenSwap from './TokenSwap';
import { ModalProvider } from '../Contexts/ModelContext';

const renderComponent = () =>
  render(
    <ModalProvider>
      <TokenSwap />
    </ModalProvider>
  );

test('it renders two input fields', () => {
  renderComponent();

  const fromTokenInput = screen.getByPlaceholderText('From Token');
  const toTokenInput = screen.getByPlaceholderText('To Token');

  expect(fromTokenInput).toBeDefined();
  expect(toTokenInput).toBeDefined();
});

test('it allows the user to type into the input fields', () => {
  renderComponent();

  const fromTokenInput = screen.getByPlaceholderText('From Token');
  const toTokenInput = screen.getByPlaceholderText('To Token');

  // this is pretty dummy for now but we'll conversion logic etc later
  fireEvent.change(fromTokenInput, { target: { value: '1000' } });
  fireEvent.change(toTokenInput, { target: { value: '1000' } });

  //@ts-ignore
  expect(fromTokenInput.value).toBe('1000');
  //@ts-ignore
  expect(toTokenInput.value).toBe('1000');
});
