import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import ModalTrigger from './ModalTrigger';
import { ModalProvider } from '../Contexts/ModelContext';

test('opens the modal when clicked', () => {
  const { getByText } = render(
    <ModalProvider>
      <ModalTrigger
        triggerText={'Trigger'}
        modal={
          <Modal>
            <>
              <h1>Modal Content</h1>
              <p>More content...</p>
            </>
          </Modal>
        }
      />
    </ModalProvider>
  );

  fireEvent.click(getByText('Trigger'));
  expect(getByText('More content...')).toBeDefined();
});
