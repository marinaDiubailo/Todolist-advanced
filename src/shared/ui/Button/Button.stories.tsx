import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
    title: 'ui/redesigned/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'TEXT',
        variant: 'clear',
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'TEXT',
        variant: 'outline',
    },
};

export const Outline: Story = {
    args: {
        children: 'TEXT',
        variant: 'outline',
    },
};

export const Disabled: Story = {
    args: {
        children: 'TEXT',
        disabled: true,
    },
};
