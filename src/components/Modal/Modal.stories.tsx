import React from 'react';
import { Story, Meta } from '@storybook/react';
import ModalTrigger from './ModalTrigger';
import Modal from '../Modal';
import { ModalProvider } from '../Contexts/ModelContext';

export default {
  title: 'ModalTrigger',
  component: ModalTrigger,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} as Meta;

const Template: Story = (args) => (
  <ModalTrigger
    triggerText={args.triggerText}
    modal={
      <Modal>
        <>
          <h1>Modal Content</h1>
          <p>More content...</p>
        </>
      </Modal>
    }
  />
);

export const Primary = Template.bind({});
Primary.args = {
  triggerText: 'Open Modal',
};
