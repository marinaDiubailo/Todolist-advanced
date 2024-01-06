import type { Meta, StoryObj } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

const meta = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Light: Story = {
    args: {},
};
