import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui/button';
 
const button = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  
} satisfies Meta<typeof Button>;
 
export default button;
type Story = StoryObj<typeof button>;
 
export const Primary: Story = {
  args: {
    children: 'I am a primary button.',
  },
};