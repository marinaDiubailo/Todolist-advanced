import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
};