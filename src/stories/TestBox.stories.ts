import type {Meta, StoryObj} from '@storybook/react';

import { TestBox } from './TestBox';

const meta = {
    title: 'Example/TestBox',
    component: TestBox,
    parameters: {
        backgroundColor: 'yellow'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} satisfies Meta<typeof TestBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      primary: true,
      label: 'Button',
    },
  };
  
  export const Secondary: Story = {
    args: {
      label: 'Button',
    },
  };
  
  export const Large: Story = {
    args: {
      size: 'large',
      label: 'Button',
    },
  };
  
  export const Small: Story = {
    args: {
      size: 'small',
      label: 'Button',
    },
  };