// components/TokenSwap/TokenSwap.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import TokenSwap from './TokenSwap';
import { ModalProvider } from '../Contexts/ModelContext';

export default {
  title: 'Components/TokenSwap',
  component: TokenSwap,
} as Meta;

const Template: Story = (args) => (
  <ModalProvider>
    <TokenSwap {...args} />
  </ModalProvider>
);

export const Default = Template.bind({});
