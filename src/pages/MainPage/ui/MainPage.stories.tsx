import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    args: {},
};
